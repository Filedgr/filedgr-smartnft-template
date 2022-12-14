<template>
  <div class="content-container">

    <van-card v-for="tx in this.transactions"
              :key="tx.hash"
              :title="tx.title"
              :thumb="tx.thumb">
      <template #desc>
        <div class="desc">
          <b>Date:</b> {{ tx.date.toLocaleString() }}<br/>
          <b>TokenId:</b> {{ tx.tokenId }}<br/>
          <b>Transaction</b>: <a target="_blank"
                                 v-bind:href="'https://livenet.xrpl.org/transactions/' + tx.hash + '/detailed'">{{
            tx.hash
          }}</a>
        </div>
        <div class="additional-content" v-if="tx.format === 'txt'">
          <MessageWrapper :file-url="tx.memo"></MessageWrapper>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { MyLedger, MyTransaction } from '@/my-xrpl/ledger'
import { fromHex, stringToUint8Array } from '@/utils/encoding'
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common'
import MessageWrapper from '@/components/MessageWrapper.vue'
import { Nft } from '@/store/types'

@Options({
  components: {
    MessageWrapper
  }
})
export default class History extends Vue {
  private transactions: MyTransaction[] = []
  private issuer = ''
  private transactionAccount = ''
  private nft = ''
  private txToken = ''

  mounted () {
    this.issuer = this.$store.state.accountState.issuer
    this.transactionAccount = this.$store.state.accountState.transaction
    this.nft = this.$store.state.tokenState.nftName
    this.txToken = this.$store.state.tokenState.transactionTokenName
    this.getTransactions()
    this.getNft()
  }

  async getNft (): Promise<void> {
    console.log('Getting theNFT')
    const ledger = new MyLedger(this.issuer,
      this.nft,
      this.txToken)
    await ledger.connect()
    const result = await ledger.getTx()
    if (result) {
      result.result.transactions.forEach(
        x => {
          if (x.tx?.TransactionType === 'NFTokenMint') {
            const nftBytes = fromHex(x.tx?.URI)
            const nft = Nft.decode(stringToUint8Array(nftBytes))
            console.log(nft.id)
            if (nft.id === this.nft) {
              // eslint-disable-next-line no-unused-expressions
              this.transactions?.push({
                title: 'NFT Minted',
                tokenId: this.nft,
                hash: (typeof x.tx.hash === 'undefined') ? 'No Hash' : x.tx.hash,
                date: (typeof x.tx.date === 'undefined') ? new Date() : new Date((x.tx.date + 946684800) * 1000),
                currency: '',
                amount: -1,
                memo: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoData!),
                format: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoFormat!),
                thumb: require('@/assets/images/nft.png')
              })
            }
          }
        }
      )
    }
  }

  async getTransactions (): Promise<void> {
    const ledger = new MyLedger(this.transactionAccount,
      this.nft,
      this.txToken)
    await ledger.connect()
    const result = await ledger.getTx()
    if (result) {
      result.result.transactions.forEach(
        x => {
          if (x.tx?.TransactionType === 'Payment' &&
            (typeof x.tx?.Amount !== 'string' &&
              (fromHex(x.tx?.Amount.currency) === this.txToken))) {
            const myAmount = x.tx.Amount as IssuedCurrencyAmount
            // eslint-disable-next-line no-unused-expressions
            this.transactions?.push({
              title: (fromHex(x.tx?.Amount.currency) === this.nft) ? 'NFT Minted' : 'New Digital Twin Transaction',
              tokenId: this.txToken,
              hash: (typeof x.tx.hash === 'undefined') ? 'No Hash' : x.tx.hash,
              date: (typeof x.tx.date === 'undefined') ? new Date() : new Date((x.tx.date + 946684800) * 1000),
              currency: fromHex(myAmount.currency).trim(),
              amount: parseFloat(myAmount.value),
              memo: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoData!),
              format: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoFormat!),
              thumb: (fromHex(x.tx?.Amount.currency) === this.nft) ? require('@/assets/images/nft.png') : require('@/assets/images/nft-thumb.png')
            })
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/vars.scss";

.van-card {
  background: $sylbaa-light-blue;
  border-radius: $border-radius;
}

.desc {
  padding-top: .75rem;
}

@media only screen and (max-width: 1200px) {
  .desc {
    padding-top: .75rem;
    width: 210px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.additional-content {
  padding: .25rem;
}
</style>
