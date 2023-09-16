import { StateManager } from "@/core/StateManager";
import { Service } from "../service";
import { MarketInfoPresenterFunc, MarketInfoState } from "../types";

export default function createMarketInfoPresenter(
  store: StateManager<MarketInfoState>,
  service: Service
): MarketInfoPresenterFunc {
  return {
    state: store.state,
    async onGenerateRandom() {
      const marketInfo = await service.generateRandomMarketInfo();
      store.updateState({ ...store.state, marketInfo });
    },
    onFetch() {
      console.log("hello");
    },
  };
}
