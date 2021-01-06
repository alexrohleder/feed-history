import { useState } from "react";
import useSWR from "swr";
import "./FilterDialog.scss";
import MarketSelectionTab from "./MarketSelectionTab";

enum TabEnum {
  MARKET_SELECTION,
  FILTERS,
}

function FilterDialog() {
  const event = useSWR<SportEvent>("event");
  const [activeTab, setActiveTab] = useState(TabEnum.MARKET_SELECTION);

  return (
    <div className="FilterDialog">
      <div className="FilterDialogTabs">
        <div
          className={`FilterDialogTabs_Tab ${
            activeTab === TabEnum.MARKET_SELECTION ? "active" : ""
          }`}
          onClick={() => setActiveTab(TabEnum.MARKET_SELECTION)}
        >
          Market Selection (Shift + M)
        </div>
        <div
          className={`FilterDialogTabs_Tab ${
            activeTab === TabEnum.FILTERS ? "active" : ""
          }`}
          onClick={() => setActiveTab(TabEnum.FILTERS)}
        >
          Filters (Shift + F)
        </div>
      </div>
      <div className="FilterDialog_Body">
        <MarketSelectionTab markets={event.data?.markets} />
      </div>
    </div>
  );
}

export default FilterDialog;
