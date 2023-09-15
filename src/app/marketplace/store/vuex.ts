// import type { UpdatableState } from '@/core/UpdatableState'
// import { useStore } from 'vuex'
// import initState from '../pages/some-shop/presenter/initState'
// import type { State } from '../types'

// const store = {
//   state: initState(),
//   mutations: {
//     updateState(state: State, newState: State) {
//       state = newState
//     },
//     resetState(state: State) {
//       state = initState()
//     }
//   }
// }

// export const useMarketplaceStore = (): UpdatableState<State> => {
//   const store = useStore()

//   function updateState(newState: State) {
//     store.commit('updateState', newState)
//   }

//   function resetState() {
//     store.commit('resetState')
//   }

//   return { state: store.state.marketplace, updateState, resetState }
// }

// export default store
