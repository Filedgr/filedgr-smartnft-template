import { createStore, StoreOptions } from 'vuex'
import { tokens, accounts } from '@/json/ledger.json'
import { ids } from '@/json/injectables.json'

export default createStore({
  state: {
    tokenState: {
      nftName: tokens.nftToken,
      transactionTokenName: tokens.transactionToken
    },
    accountState: {
      issuer: accounts.issuer,
      transaction: accounts.transaction
    },
    injectables: {
      processId: ids.processId
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
