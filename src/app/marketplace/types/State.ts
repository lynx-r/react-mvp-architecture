import type { MarketInfo, Shop, Stock } from './domain'

export interface State {
  shops: Shop[]
  stocks: Stock[]
  marketInfo: MarketInfo
}
