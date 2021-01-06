import groupBy from "group-by";
import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";
import { getSortedSpecifiers } from "../../lib/getSortedSpecifiers";
import "./MarketSelectionTab.scss";
import MarketSelectionTabItem from "./MarketSelectionTabItem";
import MarketSelectionTabItemList from "./MarketSelectionTabItemList";

type Props = {
  markets?: SportEventMarket[];
};

function MarketSelectionTab(props: Props) {
  const context = useContext(MarketSelectionContext);
  const isSelected = context.isMarketSelected;
  const toggleSelection = context.toggleMarketSelection;
  const [search, setSearch] = useState("");

  if (typeof props.markets === "undefined") {
    return <div className="MarketSelectionTab_Message">Loading...</div>;
  }

  if (props.markets.length === 0) {
    return <div className="MarketSelectionTab_Message">No markets found</div>;
  }

  const marketsByLetter: Record<
    string,
    SportEventMarket[]
  > = groupBy(props.markets, (market: SportEventMarket) =>
    market.name.substr(0, 1).toUpperCase()
  );

  const content = [];
  const searchTerm = search.toLowerCase().trim();

  for (const letter in marketsByLetter) {
    const markets: ReactNode[] = [];

    for (const market of marketsByLetter[letter]) {
      if (market.specifiers.default) {
        if (market.name.toLowerCase().includes(searchTerm)) {
          markets.push(
            <MarketSelectionTabItem
              key={market.id}
              label={market.name}
              checked={isSelected(market.id, "default")}
              onChange={toggleSelection.bind(null, market.id, "default")}
            />
          );

          continue;
        }
      }

      const specifiers = getSortedSpecifiers(
        Object.keys(market.specifiers).filter((specifier) =>
          `${market.name} ${specifier}`.toLowerCase().includes(searchTerm)
        )
      );

      if (specifiers.length) {
        markets.push(
          <MarketSelectionTabItemList key={market.id} title={market.name}>
            {specifiers.map((specifier) => (
              <MarketSelectionTabItem
                key={specifier}
                label={specifier}
                checked={isSelected(market.id, specifier)}
                onChange={toggleSelection.bind(null, market.id, specifier)}
              />
            ))}
          </MarketSelectionTabItemList>
        );
      }
    }

    if (markets.length === 0) {
      continue;
    }

    content.push(
      <div key={letter} className="MarketSelectionTab_Column">
        <div className="MarketSelectionTab_ColumnTitle">{letter}</div>
        {markets}
      </div>
    );
  }

  return (
    <div className="MarketSelectionTab">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="market-selection"
        className="MarketSelectionTab_Search"
        autoFocus
      />
      {content.length ? (
        <div className="MarketSelectionTab_Body">
          <div className="MarketSelectionTab_Grid">{content}</div>
        </div>
      ) : (
        <div className="MarketSelectionTab_Message">
          No market or specifier found with your search term
        </div>
      )}
    </div>
  );
}

export default MarketSelectionTab;
