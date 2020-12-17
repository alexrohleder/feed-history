import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import LogsTableOutcomes from "./LogsTableOutcomes";
import LogsTableStatistics from "./LogsTableStatistics/LogsTableStatistics";
import "./LogsTable.scss";

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
            <th>
              <div className="resizeable">Time</div>
              <div>Type</div>
              <div>Match status</div>
              <div>Score</div>
              <div>Statistics</div>
            </th>
            {entries.map((entry) => (
              <th key={entry.timestamp}>
                <div className="resizeable">{toDateTime(entry.timestamp)}</div>
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
                    return (
                      <LogsTableOutcomes
                        key={entry.timestamp}
                        status={entry.markets[market.id].status}
                        outcomes={entry.markets[market.id].outcomes}
                      />
                    );
                  }
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
