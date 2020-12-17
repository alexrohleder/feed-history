import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import "./LogsTable.scss";
import LogsTableOutcomes from "./LogsTableOutcomes";

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
            </th>
            {entries.map((entry) => (
              <th key={entry.timestamp}>
                <div className="resizeable">{toDateTime(entry.timestamp)}</div>
                <div>{entry.type}</div>
                <div>{entry.status}</div>
                <div>{entry.score}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {markets.map((market) => (
            <tr key={market.id}>
              <th>{market.name}</th>
              {entries.map((entry) => {
                if (entry.type === "Odds change") {
                  if (!entry.markets[market.id]) {
                    // this happens on CODDS feed history
                    return <td />;
                  }

                  return (
                    <LogsTableOutcomes
                      status={entry.markets[market.id].status}
                      outcomes={entry.markets[market.id].outcomes}
                    />
                  );
                }

                return <td />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsTable;
