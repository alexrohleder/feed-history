import { useContext } from "react";
import MultipleValueTextInput from "react-multivalue-text-input";
import { SearchContext } from "../../context/SearchContext";
import HeaderPanelMarketSelection from "./HeaderPanelMarketSelection";

type Props = {
  onClose: () => void;
  markets: SportEventMarket[];
};

function HeaderPanel(props: Props) {
  const search = useContext(SearchContext);

  return (
    <div className="HeaderPanel">
      <div className="HeaderPanel_Filters">
        <MultipleValueTextInput
          onItemAdded={search.addSpecifier}
          onItemDeleted={search.removeSpecifier}
          label="Search Specifiers"
          name="specifiers"
          placeholder="Separate values with comma or enter..."
        />
        <MultipleValueTextInput
          onItemAdded={search.addOutcome}
          onItemDeleted={search.removeOutcome}
          label="Search Outcomes"
          name="outcomes"
          placeholder="Separate values with comma or enter..."
        />
      </div>
      <HeaderPanelMarketSelection markets={props.markets} />
    </div>
  );
}

export default HeaderPanel;
