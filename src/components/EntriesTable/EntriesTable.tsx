import { format } from "date-fns";
import newArray from "new-array";
import { ReactNode, useContext, useState } from "react";
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

const STATUS_COLOR = ["", "#fecaca", "#fed7aa"];
const INACTIVE_COLOR = "#e4e4e7";

function EntriesTable(props: Props) {
  const marketSelection = useContext(MarketSelectionContext);
  const [isStatisticsVisible, setStatisticsVisibility] = useState(false);
  const search = useContext(SearchContext);
  const expansion = useSpecifierExpansion();

  const rows = [];

  for (const market of props.markets) {
    if (!marketSelection.isSelected(market.id)) {
      console.log("hmm");
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
        console.log("oho", search.isSpecifierVisible(specifier));
        continue;
      }

      // defining the matrix of rows and columns, see as [[col, col, col], [col, col, col]].
      const rowCount = expansion.count(market, specifier);
      const rowsWithCols: ReactNode[][] = newArray(rowCount).map(() => []);

      // looping columns, see entries as columns and outcomes as rows
      for (const col in props.entries) {
        const entry = props.entries[col];

        if (entry.type !== "Odds change") {
          for (let row = 0; row < rowCount; row++) {
            rowsWithCols[row].push(<td key={col} className="empty" />);
          }
        } else {
          // should never happen, but for safety lets treat
          if (!entry.markets[market.id].specifiers[specifier]) {
            console.log("ué");
            continue;
          }

          const specifierObj = entry.markets[market.id].specifiers[specifier];
          const { outcomes, status } = specifierObj;

          for (let row = 0; row < rowCount; row++) {
            const outcome = outcomes[row];
            const style = { backgroundColor: STATUS_COLOR[status] };
            let name, odds, changedFromOdds;

            if (search.isOutcomeVisible(outcome.name)) {
              name = outcome.name;
              odds = outcome.odds.toFixed(2);
              changedFromOdds = outcome.changedFromOdds?.toFixed(2);

              if (!outcome.active) {
                style.backgroundColor = INACTIVE_COLOR;
              }
            }

            rowsWithCols[row].push(
              <td
                key={`${col}:n`}
                className="outcome-name"
                title={name}
                style={style}
              >
                {name}
              </td>
            );

            rowsWithCols[row].push(
              <td
                key={`${col}:o`}
                className="outcome-odds"
                title={odds}
                style={style}
              >
                {odds}
                {changedFromOdds && (
                  <div
                    className="outcome-odds-changed"
                    title={`Odds changed from ${changedFromOdds} to ${odds}`}
                  />
                )}
              </td>
            );
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
                <th
                  rowSpan={marketRowSpan}
                  className="market"
                  title={market.name}
                >
                  {market.name}
                </th>
              )}
              {/** if first row of an specifier we place specifier name and actions */}
              {rowIndex === 0 && (
                <>
                  <th
                    rowSpan={group.rows.length}
                    className="specifier"
                    title={group.name}
                  >
                    {group.name}
                  </th>
                  <th className="actions" rowSpan={group.rows.length}>
                    <button
                      disabled={!expansion.isIncreasable(market, group.name)}
                      onClick={() => expansion.increase(market, group.name)}
                      title={`Expand outcomes of specifier ${group.name} on market ${market.name}`}
                    >
                      +
                    </button>
                    <button
                      disabled={!expansion.isDecreasable(market, group.name)}
                      onClick={() => expansion.decrease(market, group.name)}
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
              colSpan={entry.type === "Odds change" ? 2 : 1}
            >
              <div>{format(entry.timestamp, "dd/MM/Y HH:mm:ss")}</div>
              <div>{entry.type}</div>
              <div>{entry.status}</div>
              <div>{entry.score}</div>
              <div className="statistics">
                {entry.statistics &&
                  (isStatisticsVisible ? (
                    <ul>
                      {Object.keys(entry.statistics).map((statistic) => (
                        <li>
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
      {rows}
    </table>
  );
}

export default EntriesTable;
