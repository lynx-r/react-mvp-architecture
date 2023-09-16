import { PresenterStoreAdapter } from "@/core/PresenterStoreAdapter";
import type { StateManager } from "@/core/StateManager";
import type { Service } from "../service";
import type { MarketInfoState, Shop, Stock } from "../types";
import type { Presenter } from "./Presenter";

export class PresenterImpl
  extends PresenterStoreAdapter<MarketInfoState>
  implements Presenter
{
  state0: MarketInfoState;

  constructor(store: StateManager<MarketInfoState>, private service: Service) {
    super(store);
    this.state0 = store.state;
  }

  get shops() {
    return this.state.shops;
  }

  async onAddShop(shop: Shop): Promise<void> {
    await this.service.addShop(shop);
    const shops = await this.service.getShops();
    this.updateState({ shops });
  }

  async onAddRandomShop(): Promise<void> {
    await this.service.addRandomShop();
    const shops = await this.service.getShops();
    this.updateState({ shops });
  }

  get stocks() {
    return this.state.stocks;
  }

  async onAddStock(stock: Stock): Promise<void> {
    await this.service.addStock(stock);
    const stocks = await this.service.getStocks();
    this.updateState({ stocks });
  }

  async onAddRandomStock(): Promise<void> {
    await this.service.addRandomStock();
    const stocks = await this.service.getStocks();
    this.updateState({ stocks });
  }

  get marketInfo() {
    return this.state.marketInfo.info;
  }

  async onGenerateRandomMarketInfo() {
    const marketInfo = await this.service.generateRandomMarketInfo();
    this.updateState({ marketInfo });
  }
}
