import react, { ReactNode, useEffect, useState } from "react";
import useSWR from "swr";

type Context = {
  isSelected: (marketId: number, specifier?: string) => boolean;
  toggle: (marketId: number, specifier: string) => void;
  selectAll: () => void;
  deselectAll: () => void;
};

export const MarketSelectionContext = react.createContext<Context>({
  isSelected: () => false,
  toggle: () => undefined,
  selectAll: () => undefined,
  deselectAll: () => undefined,
});

export function MarketSelectionContextProvider(props: { children: ReactNode }) {
  const event = useSWR<SportEvent>("event", { suspense: false });
  const [selection, setSelection] = useState<MarketSelection[]>([]);

  useEffect(() => {
    if (event.data?.defaultMarketSelection) {
      setSelection(event.data?.defaultMarketSelection);
    }
  }, [event.data?.defaultMarketSelection]);

  function isSelected(id: number, specifier?: string) {
    if (typeof specifier === "undefined") {
      return selection.some((item) => item.id === id);
    }

    return selection.some(
      (item) => item.id === id && item.specifier === specifier
    );
  }

  function toggle(id: number, specifier: string) {
    if (isSelected(id, specifier)) {
      return setSelection(
        selection.filter(
          (item) => item.id !== id || item.specifier !== specifier
        )
      );
    }

    return setSelection([...selection, { id, specifier }]);
  }

  function selectAll() {
    const all: MarketSelection[] = [];

    for (const market of event.data!.markets) {
      for (const specifier in market.specifiers) {
        all.push({ id: market.id, specifier });
      }
    }

    setSelection(all);
  }

  function deselectAll() {
    setSelection([]);
  }

  return (
    <MarketSelectionContext.Provider
      value={{
        isSelected,
        toggle,
        selectAll,
        deselectAll,
      }}
    >
      {props.children}
    </MarketSelectionContext.Provider>
  );
}
