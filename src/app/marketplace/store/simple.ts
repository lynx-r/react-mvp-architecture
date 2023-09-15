import type { UpdatableState } from '@/core/UpdatableState'
import initState from '../presenter/initState'
import type { State } from '../types'

const store: (state: State) => UpdatableState<State> = (state: State) => ({
  state,
  updateState(newState: State) {
    state = newState
  },
  resetState() {
    state = initState()
  }
})

export function simpleMarketplaceStore(state: State) {
  return store(state)
}
