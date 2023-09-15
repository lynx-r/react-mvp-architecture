export interface Shop {
  shopId: string
  shopName: string
  date: number
  formattedDate?: string
}

export interface Stock {
  capacity: number
  address: string
  date: number
  formattedDate?: string
}

export interface MarketInfo {
  info: string
}
