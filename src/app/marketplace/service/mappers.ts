import type { Shop, Stock } from '../types'

// make some server side fields more appropriate for frontend. E.g. format date

export const mapShop = (shop: Shop): Shop => ({
  ...shop,
  formattedDate: new Date(shop.date).toLocaleDateString()
})

export const mapStock = (stock: Stock): Stock => ({
  ...stock,
  formattedDate: new Date(stock.date).toLocaleDateString()
})
