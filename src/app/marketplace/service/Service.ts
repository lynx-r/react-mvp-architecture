import type { MarketInfo, Shop, Stock } from '../types'

export interface Service {
  generateRandomMarketInfo(): Promise<MarketInfo>

  getShops(): Promise<Shop[]>
  addShop(shop: Shop): Promise<void>
  addRandomShop(): Promise<void>

  getStocks(): Promise<Stock[]>
  addStock(stock: Stock): Promise<void>
  addRandomStock(): Promise<void>
}
