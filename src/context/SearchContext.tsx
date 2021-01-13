import { createContext, ReactNode, useState } from "react";

type Context = {
  specifierTerms: string[];
  outcomeTerms: string[];
  addSpecifier: (item: string) => void;
  removeSpecifier: (item: string) => void;
  addOutcome: (item: string) => void;
  removeOutcome: (item: string) => void;
  isSpecifierVisible: (specifier: string) => boolean;
  isOutcomeVisible: (outcome: string) => boolean;
};

export const SearchContext = createContext<Context>({
  specifierTerms: [],
  outcomeTerms: [],
  addSpecifier: () => undefined,
  removeSpecifier: () => undefined,
  addOutcome: () => undefined,
  removeOutcome: () => undefined,
  isSpecifierVisible: () => false,
  isOutcomeVisible: () => false,
});

function useList(): [string[], (item: string) => void, (item: string) => void] {
  const [list, setList] = useState<string[]>([]);

  return [
    list,
    (item) => setList([...list, item]),
    (item) => setList(list.filter((i) => i !== item)),
  ];
}

export function SearchContextProvider(props: { children: ReactNode }) {
  const [specifierTerms, addSpecifier, removeSpecifier] = useList();
  const [outcomeTerms, addOutcome, removeOutcome] = useList();

  const buildSearch = (needles: string[]) => (haystack: string) => {
    if (needles.length === 0) {
      return true;
    }

    const target = haystack.toLowerCase();

    return needles.some((needle) => target.includes(needle));
  };

  return (
    <SearchContext.Provider
      value={{
        specifierTerms,
        outcomeTerms,
        addSpecifier,
        removeSpecifier,
        addOutcome,
        removeOutcome,
        isSpecifierVisible: buildSearch(specifierTerms),
        isOutcomeVisible: buildSearch(outcomeTerms),
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
