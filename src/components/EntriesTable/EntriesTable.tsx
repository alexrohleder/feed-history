import { format } from "date-fns";
import { ReactNode, useContext, useState } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";
import { SearchContext } from "../../context/SearchContext";
import EntriesTableCol from "./EntriesTableCol";
import EntriesTableRowHeader from "./EntriesTableRowHeader";
import useSpecifierExpansion from "./hooks/useSpecifierExpansion";

type Props = {
  markets: SportEventMarket[];
  entries: FeedEntry[];
};

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

function EntriesTable(props: Props) {
  const marketSelection = useContext(MarketSelectionContext);
  const [isStatisticsVisible, setStatisticsVisibility] = useState(false);
  const search = useContext(SearchContext);
  const expansion = useSpecifierExpansion();

  const rows = [];
  const isSearchingOutcomes = search.outcomeTerms.length > 0;

  for (const market of props.markets) {
    if (!marketSelection.isSelected(market.id)) {
      continue;
    }

    const rowsBySpecifier = [];
    const specifiers = Object.keys(market.specifiers).sort(collator.compare);

    let marketRowSpan = 0;

    for (const specifier of specifiers) {
      if (
        !marketSelection.isSelected(market.id, specifier) ||
        !search.isSpecifierVisible(specifier)
      ) {
        continue;
      }

      const specifierRows: ReactNode[] = [];
      const expandedRowsCount = expansion.count(market, specifier);
      const outcomes = market.specifiers[specifier].sort(collator.compare);

      for (const outcomeName of outcomes) {
        if (!search.isOutcomeVisible(outcomeName)) {
          continue;
        }

        if (isSearchingOutcomes || specifierRows.length < expandedRowsCount) {
          specifierRows.push(
            props.entries.map((entry) => (
              <EntriesTableCol
                key={entry.timestamp}
                entry={entry}
                marketId={market.id}
                specifier={specifier}
                outcomeName={outcomeName}
              />
            ))
          );
        }
      }

      marketRowSpan += specifierRows.length;
      rowsBySpecifier.push({ name: specifier, rows: specifierRows });
    }

    rows.push(
      <tbody key={market.name}>
        {rowsBySpecifier.flatMap((specifier, specifierIndex) =>
          specifier.rows.map((cols, rowIndex) => (
            <tr key={`${specifier.name}:${rowIndex}`}>
              <EntriesTableRowHeader
                specifier={specifier}
                isFirstRow={rowIndex === 0}
                isFirstSpecifier={specifierIndex === 0}
                isSearchingOutcomes={isSearchingOutcomes}
                marketRowSpan={marketRowSpan}
                market={market}
                expansion={expansion}
              />
              {cols}
            </tr>
          ))
        )}
      </tbody>
    );
  }

  return (
    <table className="EntriesTable" id="table-to-xls">
      <thead>
        <tr>
          <th colSpan={3} className="labels">
            <div>Time</div>
            <div>Type</div>
            <div>Match status</div>
            <div>Score</div>
            <div className="statistics header">
              Statistics{" "}
              <button
                className="action"
                onClick={() => setStatisticsVisibility(!isStatisticsVisible)}
                title="Toggle statistics visibility"
              >
                {isStatisticsVisible ? (
                  <span>&#708;</span>
                ) : (
                  <span>&#709;</span>
                )}
              </button>
            </div>
          </th>
          {props.entries.map((entry) => (
            <th
              key={entry.timestamp}
              colSpan={entry.type === "odds_change" ? 2 : 1}
            >
              <div>{entry.timestamp}</div>
              <div>{entry.type}</div>
              <div>{entry.status}</div>
              <div>{entry.score}</div>
              <div className="statistics">
                {entry.statistics &&
                  (isStatisticsVisible ? (
                    <ul>
                      {Object.keys(entry.statistics).map((statistic) => (
                        <li key={statistic}>
                          <b>{statistic}</b>
                          {entry.statistics?.[statistic]}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="empty">Contains Statistics</div>
                  ))}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {rows.length ? (
        rows
      ) : (
        <tbody className="empty">
          <tr>
            <td colSpan={1000}>
              No entries visible. Please adjust your filters.
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default EntriesTable;
