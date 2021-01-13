import react, { ReactNode, useEffect, useState } from "react";
import useSWR from "swr";

type Context = {
  isMarketSelected: (marketId: number, specifier?: string) => boolean;
  toggleMarketSelection: (marketId: number, specifier: string) => void;
  selectAllMarkets: () => void;
  deselectAllMarkets: () => void;
};

export const MarketSelectionContext = react.createContext<Context>({
  isMarketSelected: () => false,
  toggleMarketSelection: () => undefined,
  selectAllMarkets: () => undefined,
  deselectAllMarkets: () => undefined,
});

export function MarketSelectionContextProvider(props: { children: ReactNode }) {
  const event = useSWR<SportEvent>("event", { suspense: false });
  const [selection, setSelection] = useState<MarketSelection[]>([]);

  useEffect(() => {
    if (event.data?.defaultMarketSelection) {
      setSelection(event.data?.defaultMarketSelection);
    }
  }, [event.data?.defaultMarketSelection]);

  function isMarketSelected(id: number, specifier?: string) {
    if (typeof specifier === "undefined") {
      return selection.some((item) => item.id === id);
    }

    return selection.some(
      (item) => item.id === id && item.specifier === specifier
    );
  }

  function toggleMarketSelection(id: number, specifier: string) {
    if (isMarketSelected(id, specifier)) {
      return setSelection(
        selection.filter(
          (item) => item.id !== id || item.specifier !== specifier
        )
      );
    }

    return setSelection([...selection, { id, specifier }]);
  }

  function selectAllMarkets() {
    const all: MarketSelection[] = [];

    for (const market of event.data!.markets) {
      for (const specifier in market.specifiers) {
        all.push({ id: market.id, specifier });
      }
    }

    setSelection(all);
  }

  function deselectAllMarkets() {
    setSelection([]);
  }

  return (
    <MarketSelectionContext.Provider
      value={{
        isMarketSelected,
        toggleMarketSelection,
        selectAllMarkets,
        deselectAllMarkets,
      }}
    >
      {props.children}
    </MarketSelectionContext.Provider>
  );
}
