"use client";

import { usePresenter } from "../presenter/usePresenter";

export default function MarketInfo() {
  const presenter = usePresenter();

  return (
    <>
      <div>Market info: {presenter.state.marketInfo.info}</div>
      <button
        onClick={() => {
          presenter.onGenerateRandom();
        }}
      >
        generate info
      </button>
    </>
  );
}
