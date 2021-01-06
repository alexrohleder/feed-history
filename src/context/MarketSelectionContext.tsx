import react, { ReactNode, useEffect, useState } from "react";
import useSWR from "swr";

type Context = {
  isMarketSelected: (marketId: number, specifier?: string) => boolean;
  toggleMarketSelection: (marketId: number, specifier: string) => void;
};

export const MarketSelectionContext = react.createContext<Context>({
  isMarketSelected: () => false,
  toggleMarketSelection: () => undefined,
});

const EMPTY: any[] = [];

export function MarketSelectionContextProvider(props: { children: ReactNode }) {
  const event = useSWR<SportEvent>("event");
  const defaultMarketSelection = event.data?.defaultMarketSelection ?? EMPTY;
  const [selection, setSelection] = useState(defaultMarketSelection);

  useEffect(() => {
    setSelection(defaultMarketSelection);
  }, [defaultMarketSelection]);

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

  return (
    <MarketSelectionContext.Provider
      value={{ isMarketSelected, toggleMarketSelection }}
    >
      {props.children}
    </MarketSelectionContext.Provider>
  );
}
