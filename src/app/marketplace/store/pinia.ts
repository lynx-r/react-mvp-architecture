// import type { UpdatableState } from '@/core/UpdatableState'
// import { defineStore } from 'pinia'
// import { ref } from 'vue'
// import initState from '../presenter/initState'
// import type { State } from '../types'

// export const useMarketplaceStore = defineStore('marketplace', (): UpdatableState<State> => {
//   const state = ref(initState())
//   function updateState(newState: State) {
//     state.value = newState
//   }
//   function resetState() {
//     state.value = initState()
//   }

//   return { state: state as unknown as State, updateState, resetState }
// })
