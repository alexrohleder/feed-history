type Props = {
  markets?: SportEventMarket[];
};

function MarketSelectionTab(props: Props) {
  if (typeof props.markets === "undefined") {
    return <div>Loading...</div>;
  }

  if (props.markets.length === 0) {
    return <div>No markets found</div>;
  }

  return (
    <div className="MarketSelectionTab">
      {props.markets.map((market) => {
        return (
          <div key={market.id} className="MarketSelectionTab_Item">
            <label>
              <input type="checkbox" />
              {market.name}
            </label>
            {market.specifiers &&
              Object.keys(market.specifiers).map((specifier) => (
                <div key={specifier} className="MarketSelectionTab_SubItem">
                  <label>
                    <input type="checkbox" />
                    {specifier}
                  </label>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default MarketSelectionTab;
