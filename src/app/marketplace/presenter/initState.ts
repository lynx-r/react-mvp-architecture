import type { State } from '../types'

const initState = (): State => ({
  shops: [],
  stocks: [],
  marketInfo: {
    info: ''
  }
})

export default initState
