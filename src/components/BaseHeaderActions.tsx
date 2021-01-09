import { useState } from "react";
import "./BaseHeaderActions.scss";
import BaseHeaderActionsMarketSelection from "./BaseHeaderActionsMarketSelection";

type Props = {
  markets: SportEventMarket[];
};

enum Panel {
  MARKET_SELECTION,
  FILTER,
  SORT,
  EXPORT,
}

function BaseHeaderActions(props: Props) {
  const [openPanel, setOpenPanel] = useState<Panel | null>(null);

  const getClassName = (panel: Panel) =>
    openPanel === panel
      ? "BaseHeaderActions_Button active"
      : "BaseHeaderActions_Button";

  const togglePanelOpeness = (panel: Panel) =>
    setOpenPanel(openPanel === panel ? null : panel);

  return (
    <div className="BaseHeaderActions">
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
      <button
        className={getClassName(Panel.SORT)}
        onClick={() => togglePanelOpeness(Panel.SORT)}
      >
        Sort
      </button>
      <button
        className={getClassName(Panel.EXPORT)}
        onClick={() => togglePanelOpeness(Panel.EXPORT)}
      >
        Export
      </button>
      {openPanel === Panel.MARKET_SELECTION && (
        <BaseHeaderActionsMarketSelection markets={props.markets} />
      )}
    </div>
  );
}

export default BaseHeaderActions;
