import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";

type Props = {
  markets: SportEventMarket[];
};

function HeaderPanelMarketSelection(props: Props) {
  const marketSelection = useContext(MarketSelectionContext);
  const [search, setSearch] = useState("");

  const content = [];
  const searchTerm = search.toLowerCase().trim();
  const isVisible = (term: string) => term.toLowerCase().includes(searchTerm);

  const buildItem = (
    name: string,
    market: SportEventMarket,
    specifier: string
  ) => {
    return (
      <div key={name} className="HeaderPanelMarketSelection_Item">
        <label>
          <input
            type="checkbox"
            checked={marketSelection.isSelected(market.id, specifier)}
            onChange={() => marketSelection.toggle(market, specifier)}
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
        content.push(buildItem(market.name, market, "default"));
      }
    } else {
      const specifiers: ReactNode[] = [];

      for (const specifier in market.specifiers) {
        if (isMarketVisible || isVisible(specifier)) {
          specifiers.push(buildItem(specifier, market, specifier));
        }
      }

      if (specifiers.length) {
        content.push(
          <div key={market.name} className="HeaderPanelMarketSelection_Group">
            <label>
              <input
                type="checkbox"
                checked={marketSelection.isSelected(market.id)}
                onChange={() => marketSelection.toggle(market)}
              />
              {market.name}
            </label>
            {specifiers}
          </div>
        );
      }
    }
  }

  return (
    <div className="HeaderPanelMarketSelection">
      <label className="HeaderPanelMarketSelection_Search">
        Search Markets for Selection
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          name="market-selection"
          className="HeaderPanel_Input"
          placeholder="Search market or specifier name..."
          autoFocus
        />
      </label>
      <div className="HeaderPanelMarketSelection_Grid">
        {content.length ? (
          <>{content}</>
        ) : (
          <div>No market nor specifier found with your search term</div>
        )}
      </div>
      <div className="HeaderPanelMarketSelection_Footer">
        <button onClick={marketSelection.selectAll}>Select All</button>
        <button onClick={marketSelection.deselectAll}>Deselect All</button>
      </div>
    </div>
  );
}

export default HeaderPanelMarketSelection;
