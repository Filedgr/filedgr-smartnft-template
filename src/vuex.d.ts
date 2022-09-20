// import { Store } from 'vuex'
//
// declare module '@vue/runtime-core' {
//   // declare your own store states
//   interface State {
//     token: {
//       nftName: string,
//       transactionTokenName: string
//     }
//   }
//
//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }

import { Store } from '@/store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
