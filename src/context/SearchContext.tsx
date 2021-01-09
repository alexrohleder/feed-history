import react, { ReactNode, useState } from "react";

type Context = {
  specifierSearchTerm: string;
  setSpecifierSearchTerm: (term: string) => void;
  outcomeSearchTerm: string;
  setOutcomeSearchTerm: (term: string) => void;
};

export const SearchContext = react.createContext<Context>({
  specifierSearchTerm: "",
  setSpecifierSearchTerm: () => undefined,
  outcomeSearchTerm: "",
  setOutcomeSearchTerm: () => undefined,
});

export function SearchContextProvider(props: { children: ReactNode }) {
  const [specifierSearchTerm, setSpecifierSearchTerm] = useState("");
  const [outcomeSearchTerm, setOutcomeSearchTerm] = useState("");

  return (
    <SearchContext.Provider
      value={{
        specifierSearchTerm,
        setSpecifierSearchTerm,
        outcomeSearchTerm,
        setOutcomeSearchTerm,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
