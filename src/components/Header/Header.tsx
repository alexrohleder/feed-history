import { format } from "date-fns";
import { useState } from "react";
import useSWR from "swr";
import HeaderPanel from "./HeaderPanel";
import FilterPanel from "./Panels/FilterPanel";
import MarketSelection from "./Panels/MarketSelection";

enum Panel {
  MARKET_SELECTION,
  FILTER,
}

function Header() {
  const { data } = useSWR<SportEvent>("event");
  const [openPanel, setOpenPanel] = useState<Panel | null>(null);

  const getClassName = (panel: Panel) =>
    openPanel === panel ? "Header_ActionButton active" : "Header_ActionButton";

  const togglePanelOpeness = (panel: Panel) =>
    setOpenPanel(openPanel === panel ? null : panel);

  return (
    <div className="HeaderContainer">
      <header className="Header">
        <div className="Header_Meta">
          <h1>Feed History</h1>
          <h2>{data!.name}</h2>
          <h3>{format(data!.timestamp, "dd/MM/Y HH:mm:ss")} UTC</h3>
          <h4>({data!.urn})</h4>
        </div>
        <div className="Header_Actions">
          <button
            className={getClassName(Panel.MARKET_SELECTION)}
            onClick={() => togglePanelOpeness(Panel.MARKET_SELECTION)}
          >
            Market Selection
          </button>
          <button
            className={getClassName(Panel.FILTER)}
            onClick={() => togglePanelOpeness(Panel.FILTER)}
          >
            Filter
          </button>
        </div>
        {openPanel === Panel.MARKET_SELECTION && (
          <HeaderPanel onClose={() => setOpenPanel(null)}>
            <MarketSelection markets={data!.markets} />
          </HeaderPanel>
        )}
        {openPanel === Panel.FILTER && (
          <HeaderPanel onClose={() => setOpenPanel(null)}>
            <FilterPanel />
          </HeaderPanel>
        )}
      </header>
    </div>
  );
}

export default Header;
