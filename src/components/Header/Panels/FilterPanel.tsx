import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import "./FilterPanel.scss";

function FilterPanel() {
  const {
    specifierSearchTerm,
    setSpecifierSearchTerm,
    outcomeSearchTerm,
    setOutcomeSearchTerm,
  } = useContext(SearchContext);

  return (
    <div className="FilterPanel">
      <label>
        Search specifier
        <input
          autoFocus
          value={specifierSearchTerm}
          onChange={(event) => setSpecifierSearchTerm(event.target.value)}
        />
      </label>
      <label>
        Search outcomes
        <input
          value={outcomeSearchTerm}
          onChange={(event) => setOutcomeSearchTerm(event.target.value)}
        />
      </label>
      <label>
        Search timeframe
        <input type="date" disabled />
      </label>
    </div>
  );
}

export default FilterPanel;
