import type { StateManager } from "@/core/StateManager";
import { useService } from "../service/useService";
import { simpleMarketplaceStore, useMarketplaceStore } from "../store";
import type { MarketInfoPresenterFunc, MarketInfoState } from "../types";
import createMarketInfoPresenter from "./createMarketInfoPresenter";

let PRESENTER: MarketInfoPresenterFunc | null = null;

export const usePresenter = (
  state?: MarketInfoState
): MarketInfoPresenterFunc => {
  // if (!PRESENTER) {
  let store: StateManager<MarketInfoState>;
  if (state) {
    store = simpleMarketplaceStore(state);
  } else {
    store = useMarketplaceStore();
  }
  const service = useService({});
  // use store for sending events to view
  PRESENTER = createMarketInfoPresenter(store, service);
  // }
  return PRESENTER;
};
