"use client";

import { usePresenter } from "../presenter/usePresenter";

export default function MarketInfo() {
  const presenter = usePresenter();

  return (
    <>
      <div>Market info: {presenter.marketInfo}</div>
      <button
        onClick={() => {
          presenter.onGenerateRandomMarketInfo();
        }}
      >
        generate info
      </button>
    </>
  );
}
