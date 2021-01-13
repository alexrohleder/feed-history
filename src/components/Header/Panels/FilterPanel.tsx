import { useContext } from "react";
import MultipleValueTextInput from "react-multivalue-text-input";
import { SearchContext } from "../../../context/SearchContext";
import "./FilterPanel.scss";

function FilterPanel() {
  const search = useContext(SearchContext);

  return (
    <div className="FilterPanel">
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
  );
}

export default FilterPanel;
