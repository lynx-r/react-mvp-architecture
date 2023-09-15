import type { UpdatableState } from "@/core/UpdatableState";
import { useState } from "react";
import initState from "../presenter/initState";
import type { State } from "../types";

export function useMarketplaceStore(): UpdatableState<State> {
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
