import { StateManager } from "@/core/StateManager";
import type { MarketInfoState, Shop, Stock } from "../types";

export interface Presenter {
  store: StateManager<MarketInfoState>;

  shops: Shop[];

  onAddShop(shop: Shop): Promise<void>;
  onAddRandomShop(): Promise<void>;

  stocks: Stock[];

  onAddStock(stock: Stock): Promise<void>;
  onAddRandomStock(): Promise<void>;

  marketInfo: string;

  onGenerateRandomMarketInfo(): Promise<void>;
}
