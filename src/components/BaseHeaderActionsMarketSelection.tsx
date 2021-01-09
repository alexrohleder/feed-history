import groupBy from "group-by";
import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../context/MarketSelectionContext";
import { getSortedSpecifiers } from "../lib/getSortedSpecifiers";
import "./BaseHeaderActionsMarketSelection.scss";
import BaseHeaderActionsMarketSelectionItem from "./BaseHeaderActionsMarketSelectionItem";
import BaseHeaderActionsMarketSelectionItemGroup from "./BaseHeaderActionsMarketSelectionItemGroup";

type Props = {
  markets?: SportEventMarket[];
};

function BaseHeaderActionsMarketSelection(props: Props) {
  const context = useContext(MarketSelectionContext);
  const isSelected = context.isMarketSelected;
  const toggleSelection = context.toggleMarketSelection;
  const [search, setSearch] = useState("");

  if (typeof props.markets === "undefined") {
    return (
      <div className="BaseHeaderActionsMarketSelection">
        <div className="BaseHeaderActionsMarketSelection_Message">
          Loading...
        </div>
      </div>
    );
  }

  if (props.markets.length === 0) {
    return (
      <div className="BaseHeaderActionsMarketSelection">
        <div className="BaseHeaderActionsMarketSelection_Message">
          No markets found
        </div>
      </div>
    );
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
            <BaseHeaderActionsMarketSelectionItem
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
          <BaseHeaderActionsMarketSelectionItemGroup
            key={market.id}
            title={market.name}
          >
            {specifiers.map((specifier) => (
              <BaseHeaderActionsMarketSelectionItem
                key={specifier}
                label={specifier}
                checked={isSelected(market.id, specifier)}
                onChange={toggleSelection.bind(null, market.id, specifier)}
              />
            ))}
          </BaseHeaderActionsMarketSelectionItemGroup>
        );
      }
    }

    if (markets.length === 0) {
      continue;
    }

    content.push(
      <div key={letter} className="BaseHeaderActionsMarketSelection_Column">
        <div className="BaseHeaderActionsMarketSelection_ColumnTitle">
          {letter}
        </div>
        {markets}
      </div>
    );
  }

  return (
    <div className="BaseHeaderActionsMarketSelection">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="market-selection"
        className="BaseHeaderActionsMarketSelection_Search"
        autoFocus
      />
      {content.length ? (
        <div className="BaseHeaderActionsMarketSelection_Body">
          <div className="BaseHeaderActionsMarketSelection_Grid">{content}</div>
        </div>
      ) : (
        <div className="BaseHeaderActionsMarketSelection_Message">
          No market or specifier found with your search term
        </div>
      )}
    </div>
  );
}

export default BaseHeaderActionsMarketSelection;
