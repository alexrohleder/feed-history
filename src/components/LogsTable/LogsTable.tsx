import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import LogsTableOutcomes from "./LogsTableOutcomes";
import LogsTableStatistics from "./LogsTableStatistics/LogsTableStatistics";
import "./LogsTable.scss";
import LogsTableLines from "./LogsTableLines";

function LogsTable() {
  const event = useSWR<SportEvent>("event");
  const feed = useSWR<Feed>("feed");

  const markets = event.data?.markets;
  const entries = feed.data?.entries;

  if (!markets || !entries) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className="resizeable">
              <div>Time</div>
              <div>Type</div>
              <div>Match status</div>
              <div>Score</div>
              <div>Statistics</div>
            </th>
            {entries.map((entry) => (
              <th key={entry.timestamp} className="resizeable">
                <div>{toDateTime(entry.timestamp)}</div>
                <div>{entry.type}</div>
                <div>{entry.status}</div>
                <div>{entry.score}</div>
                <div>
                  {entry.statistics && (
                    <LogsTableStatistics statistics={entry.statistics} />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {markets.map((market) => (
            <tr key={market.id}>
              <th title={market.name}>{market.name}</th>
              {entries.map((entry) => {
                if (entry.type === "Odds change") {
                  if (entry.markets?.[market.id]) {
                    const { specifiers, outcomesPerLine } = entry.markets[
                      market.id
                    ];

                    if (specifiers.default) {
                      return (
                        <LogsTableOutcomes
                          key={entry.timestamp}
                          status={specifiers.default.status}
                          outcomes={specifiers.default.outcomes}
                        />
                      );
                    }

                    return (
                      <LogsTableLines
                        key={entry.timestamp}
                        specifiers={specifiers}
                        outcomesPerLine={outcomesPerLine}
                      />
                    );
                  }
                }

                if (entry.type === "Fixture change") {
                  return <td key={entry.timestamp} className="diagonal-bg" />;
                }

                return <td key={entry.timestamp} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsTable;
