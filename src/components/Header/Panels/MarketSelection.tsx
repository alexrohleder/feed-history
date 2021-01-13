import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../../../context/MarketSelectionContext";
import "./MarketSelection.scss";

type Props = {
  markets: SportEventMarket[];
};

function MarketSelection(props: Props) {
  const marketSelection = useContext(MarketSelectionContext);
  const [search, setSearch] = useState("");

  if (props.markets.length === 0) {
    return <div className="HeaderPanel_Message">No markets found</div>;
  }

  const content = [];
  const searchTerm = search.toLowerCase().trim();
  const isVisible = (term: string) => term.toLowerCase().includes(searchTerm);

  const buildItem = (name: string, marketId: number, specifier: string) => {
    return (
      <div className="MarketSelection_Item">
        <label>
          <input
            type="checkbox"
            checked={marketSelection.isSelected(marketId, specifier)}
            onChange={() => marketSelection.toggle(marketId, specifier)}
          />
          {name}
        </label>
      </div>
    );
  };

  for (const market of props.markets) {
    const isMarketVisible = isVisible(market.name);

    if (market.specifiers.default) {
      if (isMarketVisible) {
        content.push(buildItem(market.name, market.id, "default"));
      }
    } else {
      const specifiers: ReactNode[] = [];

      for (const specifier in market.specifiers) {
        if (isMarketVisible || isVisible(specifier)) {
          specifiers.push(buildItem(specifier, market.id, specifier));
        }
      }

      if (specifiers.length) {
        content.push(
          <div className="MarketSelection_Group">
            <input
              type="checkbox"
              title="You can only select specifiers of this market"
              disabled
            />
            {market.name}
            {specifiers}
          </div>
        );
      }
    }
  }

  return (
    <div className="MarketSelection">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="market-selection"
        className="MarketSelection_Search"
        placeholder="Search market or specifier name..."
        autoFocus
      />
      <div className="MarketSelection_Grid">
        {content.length ? (
          content
        ) : (
          <div className="HeaderPanel_Message">
            No market nor specifier found with your search term
          </div>
        )}
      </div>
      <div className="MarketSelection_Footer">
        <button onClick={marketSelection.selectAll}>Select All</button>
        <button onClick={marketSelection.deselectAll}>Deselect All</button>
      </div>
    </div>
  );
}

export default MarketSelection;
