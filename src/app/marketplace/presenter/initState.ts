import type { MarketInfoState } from "../types";

const initState = (): MarketInfoState => ({
  shops: [],
  stocks: [],
  marketInfo: {
    info: "",
  },
});

export default initState;
