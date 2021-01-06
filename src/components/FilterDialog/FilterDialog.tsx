import { useState } from "react";
import useSWR from "swr";
import "./FilterDialog.scss";
import MarketSelectionTab from "./MarketSelectionTab";

enum TabEnum {
  MARKET_SELECTION,
  FILTERS,
  SORT,
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
          Market Selection (Alt + M)
        </div>
        <div
          className={`FilterDialogTabs_Tab ${
            activeTab === TabEnum.FILTERS ? "active" : ""
          }`}
          onClick={() => setActiveTab(TabEnum.FILTERS)}
        >
          Filters (Alt + F)
        </div>
        <div
          className={`FilterDialogTabs_Tab ${
            activeTab === TabEnum.SORT ? "active" : ""
          }`}
          onClick={() => setActiveTab(TabEnum.SORT)}
        >
          Sort (Alt + S)
        </div>
      </div>
      {activeTab === TabEnum.MARKET_SELECTION && (
        <MarketSelectionTab markets={event.data?.markets} />
      )}
    </div>
  );
}

export default FilterDialog;
