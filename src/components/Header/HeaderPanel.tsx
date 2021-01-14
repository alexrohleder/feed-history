import { useRef } from "react";
import FilterPanel from "./Panels/FilterPanel";
import MarketSelection from "./Panels/MarketSelection";

type Props = {
  onClose: () => void;
  markets: SportEventMarket[];
};

function HeaderPanel(props: Props) {
  const ref = useRef(null);

  return (
    <div className="HeaderPanel" ref={ref}>
      <FilterPanel />
      <MarketSelection markets={props.markets} />
    </div>
  );
}

export default HeaderPanel;
