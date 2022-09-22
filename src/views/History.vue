<template>
  <div class="content-container">
    <van-card v-for="tx in this.transactions"
              :key="tx.hash"
              :title="tx.title"
              :thumb="tx.thumb">
      <template #desc>
        <div class="desc">
          <b>Date:</b> {{ tx.date.toLocaleString() }}<br/>
          <b>Transaction</b>: <a target="_blank"
                                 v-bind:href="'https://testnet.xrpl.org/transactions/' + tx.hash + '/detailed'">{{
            tx.hash
          }}</a>
        </div>
        <div class="additional-content" v-if="tx.format === 'txt'">
          <MessageWrapper :file-url="tx.memo"></MessageWrapper>
        </div>
        <div class="additional-content" v-else-if="tx.format == 'image'">
          <img v-bind:src="tx.memo">
        </div>

      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { MyLedger, MyTransaction } from '@/my-xrpl/ledger'
import { fromHex } from '@/utils/encoding'
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common'
import MessageWrapper from '@/components/MessageWrapper.vue'

@Options({
  components: {
    MessageWrapper
  }
})
export default class History extends Vue {
  private transactions: MyTransaction[] = []
  private issuer = ''
  private nft = ''
  private txToken = ''

  mounted () {
    this.issuer = this.$store.state.accountState.issuer
    this.nft = this.$store.state.tokenState.nftName
    this.txToken = this.$store.state.tokenState.transactionTokenName
    this.getTx()
  }

  async getTx (): Promise<void> {
    const ledger = new MyLedger(this.issuer,
      this.nft,
      this.txToken)
    await ledger.connect()
    const result = await ledger.getTx()
    if (result) {
      result.result.transactions.forEach(
        x => {
          if (x.tx?.TransactionType === 'Payment' &&
            (typeof x.tx?.Amount !== 'string' &&
              (fromHex(x.tx?.Amount.currency) === this.nft || fromHex(x.tx?.Amount.currency) === this.txToken))) {
            const myAmount = x.tx.Amount as IssuedCurrencyAmount
            // eslint-disable-next-line no-unused-expressions
            this.transactions?.push({
              title: (fromHex(x.tx?.Amount.currency) === this.nft) ? 'NFT Minted' : 'New Digital Twin Transaction',
              hash: (typeof x.tx.hash === 'undefined') ? 'No Hash' : x.tx.hash,
              date: (typeof x.tx.date === 'undefined') ? new Date() : new Date((x.tx.date + 946684800) * 1000),
              currency: fromHex(myAmount.currency).trim(),
              amount: parseFloat(myAmount.value),
              memo: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoData!),
              format: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoFormat!),
              thumb: (fromHex(x.tx?.Amount.currency) === this.nft) ? require('@/assets/images/sneaker-mesh.png') : require('@/assets/images/change.webp')
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
  background: #f7f0edx;
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
