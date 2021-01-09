import { format } from "date-fns";
import newArray from "new-array";
import { ReactNode, useContext } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";
import { SearchContext } from "../../context/SearchContext";
import useSpecifierExpansion from "./hooks/useSpecifierExpansion";

type Props = {
  markets: SportEventMarket[];
  entries: FeedEntry[];
};

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

const isMatchingSearch = (haystack: string, needle: string) =>
  haystack.toLowerCase().includes(needle.toLowerCase());

function EntriesTable(props: Props) {
  const { isMarketSelected } = useContext(MarketSelectionContext);
  const { specifierSearchTerm, outcomeSearchTerm } = useContext(SearchContext);

  const {
    getVisibleOutcomeCount,
    isOutcomeIncreseable,
    isOutcomeDecreaseable,
    increaseOutcomeCount,
    decreaseOutcomeCount,
  } = useSpecifierExpansion();

  const rows = [];

  for (const market of props.markets) {
    if (!isMarketSelected(market.id)) {
      continue;
    }

    const rowsBySpecifier = [];
    const specifiers = Object.keys(market.specifiers).sort(collator.compare);

    let marketRowSpan = 0;

    for (const specifier of specifiers) {
      if (
        !isMarketSelected(market.id, specifier) ||
        !isMatchingSearch(specifier, specifierSearchTerm)
      ) {
        continue;
      }

      // defining the matrix of rows and columns, see as [[col, col, col], [col, col, col]].
      const rowCount = getVisibleOutcomeCount(market, specifier);
      const rowsWithCols: ReactNode[][] = newArray(rowCount).map(() => []);

      // looping columns, see entries as columns and outcomes as rows
      for (const col in props.entries) {
        const entry = props.entries[col];

        if (entry.type !== "Odds change") {
          for (let row = 0; row < rowCount; row++) {
            rowsWithCols[row].push(<td key={col} />);
          }
        } else {
          // should never happen, but for safety lets treat
          if (!entry.markets[market.id].specifiers[specifier]) {
            continue;
          }

          const { outcomes } = entry.markets[market.id].specifiers[specifier];

          for (let row = 0; row < rowCount; row++) {
            let name, odds;

            if (isMatchingSearch(outcomes[row].name, outcomeSearchTerm)) {
              name = outcomes[row].name;
              odds = outcomes[row].odds;
            }

            rowsWithCols[row].push(<td key={`${col}:n`}>{name}</td>);
            rowsWithCols[row].push(<td key={`${col}:o`}>{odds}</td>);
          }
        }
      }

      marketRowSpan += rowsWithCols.length;
      rowsBySpecifier.push({ name: specifier, rows: rowsWithCols });
    }

    rows.push(
      <tbody key={market.name}>
        {rowsBySpecifier.flatMap((group, specifierIndex) =>
          group.rows.map((cols, rowIndex) => (
            <tr key={`${group.name}:${rowIndex}`}>
              {/** if first row of first specifier then we place market name with rowSpan */}
              {rowIndex === 0 && specifierIndex === 0 && (
                <th rowSpan={marketRowSpan} className="market">
                  {market.name}
                </th>
              )}
              {/** if first row of an specifier we place specifier name and actions */}
              {rowIndex === 0 && (
                <>
                  <th rowSpan={group.rows.length} className="specifier">
                    {group.name}
                  </th>
                  <th className="actions" rowSpan={group.rows.length}>
                    <button
                      disabled={!isOutcomeIncreseable(market, group.name)}
                      onClick={() => increaseOutcomeCount(market, group.name)}
                      title={`Expand outcomes of specifier ${group.name} on market ${market.name}`}
                    >
                      +
                    </button>
                    <button
                      disabled={!isOutcomeDecreaseable(market, group.name)}
                      onClick={() => decreaseOutcomeCount(market, group.name)}
                      title={`Collapse outcomes of specifier ${group.name} on market ${market.name}`}
                    >
                      -
                    </button>
                  </th>
                </>
              )}
              {cols}
            </tr>
          ))
        )}
      </tbody>
    );
  }

  return (
    <table className="EntriesTable">
      <thead>
        <tr>
          <th colSpan={3}>
            <div>Time</div>
            <div>Type</div>
            <div>Match status</div>
            <div>Score</div>
          </th>
          {props.entries.map((entry) => (
            <th
              key={entry.timestamp}
              className="resizeable"
              colSpan={entry.type === "Odds change" ? 2 : 1}
            >
              <div>{format(entry.timestamp, "dd/MM/Y HH:mm:ss")}</div>
              <div>{entry.type}</div>
              <div>{entry.status}</div>
              <div>{entry.score}</div>
            </th>
          ))}
        </tr>
      </thead>
      {rows}
    </table>
  );
}

export default EntriesTable;
