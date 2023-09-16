import type { StateManager } from "@/core/StateManager";
import initState from "../presenter/initState";
import type { MarketInfoState } from "../types";

const store: (state: MarketInfoState) => StateManager<MarketInfoState> = (
  state: MarketInfoState
) => ({
  state,
  updateState(newState: MarketInfoState) {
    state = newState;
  },
  resetState() {
    state = initState();
  },
});

export function simpleMarketplaceStore(state: MarketInfoState) {
  return store(state);
}
