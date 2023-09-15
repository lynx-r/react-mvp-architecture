import { delayAsync } from "@/helpers";
import { random, uniqueId } from "lodash";
import type { MarketInfo, Shop, Stock } from "../types";
import type { Service } from "./Service";
import { mapShop, mapStock } from "./mappers";

export class ServiceImpl implements Service {
  shops: Shop[] = [];
  stocks: Stock[] = [];

  constructor(_apiConfig: any) {}

  async generateRandomMarketInfo(): Promise<MarketInfo> {
    await delayAsync();
    return { info: uniqueId("market-info ") };
  }

  async getShops() {
    await delayAsync();
    return this.shops.map(mapShop);
  }

  async addShop(shop: Shop) {
    this.shops.push(shop);
    await delayAsync();
  }

  async addRandomShop() {
    await delayAsync();
    this.shops.push({
      shopId: uniqueId(),
      shopName: uniqueId("name "),
      date: new Date().getTime(),
    });
  }

  async getStocks() {
    await delayAsync();
    return this.stocks.map(mapStock);
  }

  async addStock(stock: Stock) {
    this.stocks.push(stock);
    await delayAsync();
  }

  async addRandomStock() {
    await delayAsync();
    this.stocks.push({
      address: uniqueId("address "),
      capacity: random(0, 1000),
      date: new Date().getTime(),
    });
  }
}
