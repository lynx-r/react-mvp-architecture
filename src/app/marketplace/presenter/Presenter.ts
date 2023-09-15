import { UpdatableState } from "@/core/UpdatableState";
import type { Shop, State, Stock } from "../types";

export interface Presenter {
  store: UpdatableState<State>;

  shops: Shop[];

  onAddShop(shop: Shop): Promise<void>;
  onAddRandomShop(): Promise<void>;

  stocks: Stock[];

  onAddStock(stock: Stock): Promise<void>;
  onAddRandomStock(): Promise<void>;

  marketInfo: string;

  onGenerateRandomMarketInfo(): Promise<void>;
}
