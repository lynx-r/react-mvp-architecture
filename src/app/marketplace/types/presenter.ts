import { FetchEvent, PresenterFunc } from "@/types/EventExecutor";
import type { MarketInfo, Shop, Stock } from "./domain";

export interface ShopState {
  shops: Shop[];
}

export interface StockState {
  stocks: Stock[];
}

export interface MarketInfoState {
  marketInfo: MarketInfo;
}

export type GenerateRandomEvent = {
  kind: "generateRandom";
};

export type MarketInfoPresenterFunc = PresenterFunc<
  GenerateRandomEvent | FetchEvent,
  MarketInfoState
>;
