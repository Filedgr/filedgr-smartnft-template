import { AccountTxResponse, Client } from 'xrpl'

interface MyTransaction {
  title: string
  tokenId: string
  hash: string
  date: Date
  currency: string
  amount: number
  memo: string
  format: string
  thumb: string
}

class MyLedger {
  readonly xrpl = require('xrpl')
  address: string
  nftTokenId: string
  txTokenId: string
  client: Client | undefined

  constructor (address: string,
    nftTokenId: string,
    txTokenId: string) {
    this.address = address
    this.nftTokenId = nftTokenId
    this.txTokenId = txTokenId
  }

  async connect (): Promise<boolean> {
    this.client = new this.xrpl.Client('wss://s1.ripple.com/')
    await this.client?.connect()
    return true
  }

  getTx (): Promise<void | AccountTxResponse> | undefined {
    return this.client?.request({
      command: 'account_tx',
      account: this.address
    })
    //   .then(
    //   res => res.result.transactions.filter(
    //     (tx, index, myArray) => {
    //       return tx.tx?.TransactionType === 'Payment' &&
    //         (typeof tx.tx?.Amount !== 'string' &&
    //           (tx.tx?.Amount.currency === this.nftTokenId || tx.tx?.Amount.currency === this.txTokenId))
    //     }
    //   )
    // )
  }

  async disconnect (): Promise<void> {
    const discon = await this.client?.disconnect()
    return discon
  }
}

export { MyLedger, MyTransaction }
