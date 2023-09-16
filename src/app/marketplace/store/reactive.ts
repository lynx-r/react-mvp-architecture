import type { StateManager } from "@/core/StateManager";
import { useState } from "react";
import initState from "../presenter/initState";
import type { MarketInfoState } from "../types";

export function useMarketplaceStore(): StateManager<MarketInfoState> {
  const [state, setState] = useState(initState());
  return {
    state,
    updateState: (newState) => {
      setState(newState);
    },
    resetState: () => {
      setState(initState());
    },
  };
}
