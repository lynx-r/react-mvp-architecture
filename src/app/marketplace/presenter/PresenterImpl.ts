import { PresenterStoreAdapter } from "@/core/PresenterStoreAdapter";
import type { UpdatableState } from "@/core/UpdatableState";
import type { Service } from "../service";
import type { Shop, State, Stock } from "../types";
import type { Presenter } from "./Presenter";

export class PresenterImpl
  extends PresenterStoreAdapter<State>
  implements Presenter
{
  state0: State;

  constructor(store: UpdatableState<State>, private service: Service) {
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
