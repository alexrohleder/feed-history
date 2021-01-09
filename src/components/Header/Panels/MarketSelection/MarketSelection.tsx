import groupBy from "group-by";
import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../../../../context/MarketSelectionContext";
import MarketSelectionItem from "./MarketSelectionItem";
import MarketSelectionItemGroup from "./MarketSelectionItemGroup";

type Props = {
  markets: SportEventMarket[];
};

function MarketSelection(props: Props) {
  const context = useContext(MarketSelectionContext);
  const isSelected = context.isMarketSelected;
  const toggleSelection = context.toggleMarketSelection;
  const [search, setSearch] = useState("");

  if (props.markets.length === 0) {
    return <div className="HeaderPanel_Message">No markets found</div>;
  }

  const marketsByLetter: Record<
    string,
    SportEventMarket[]
  > = groupBy(props.markets, (market: SportEventMarket) =>
    market.name.substr(0, 1).toUpperCase()
  );

  const content = [];
  const searchTerm = search.toLowerCase().trim();
  const isVisible = (term: string) => term.toLowerCase().includes(searchTerm);

  for (const letter in marketsByLetter) {
    const markets: ReactNode[] = [];

    for (const market of marketsByLetter[letter]) {
      if (market.specifiers.default) {
        if (isVisible(market.name)) {
          markets.push(
            <MarketSelectionItem
              key={market.id}
              label={market.name}
              checked={isSelected(market.id, "default")}
              onChange={toggleSelection.bind(null, market.id, "default")}
            />
          );
        }

        continue;
      }

      const specifiers = Object.keys(market.specifiers).filter((specifier) =>
        `${market.name} ${specifier}`.toLowerCase().includes(searchTerm)
      );

      if (specifiers.length) {
        markets.push(
          <MarketSelectionItemGroup key={market.id} title={market.name}>
            {specifiers.map((specifier) => (
              <MarketSelectionItem
                key={specifier}
                label={specifier}
                checked={isSelected(market.id, specifier)}
                onChange={toggleSelection.bind(null, market.id, specifier)}
              />
            ))}
          </MarketSelectionItemGroup>
        );
      }
    }

    if (markets.length === 0) {
      continue;
    }

    content.push(
      <div key={letter} className="MarketSelection_Column">
        <div className="MarketSelection_ColumnTitle">{letter}</div>
        {markets}
      </div>
    );
  }

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="market-selection"
        className="MarketSelection_Search"
        autoFocus
      />
      {content.length ? (
        <div className="MarketSelection_Body">
          <div className="MarketSelection_Grid">{content}</div>
        </div>
      ) : (
        <div className="MarketSelection_Message">
          No market or specifier found with your search term
        </div>
      )}
    </>
  );
}

export default MarketSelection;
