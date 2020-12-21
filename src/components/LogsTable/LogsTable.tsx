import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import LogsTableOutcomes from "./LogsTableOutcomes";
import LogsTableLines from "./LogsTableLines";
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
            <th className="resizeable">
              <div>Time</div>
              <div>Type</div>
              <div>Match status</div>
              <div>Score</div>
            </th>
            {entries.map((entry) => (
              <th key={entry.timestamp} className="resizeable">
                <div>{toDateTime(entry.timestamp)}</div>
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
              <th title={market.name}>{market.name}</th>
              {entries.map((entry) => {
                if (entry.type === "Odds change") {
                  if (entry.markets?.[market.id]) {
                    const { specifiers } = entry.markets[market.id];

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
                      />
                    );
                  }
                }

                return (
                  <td
                    key={entry.timestamp}
                    className="diagonal-bg"
                    data-type={entry.type}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsTable;
