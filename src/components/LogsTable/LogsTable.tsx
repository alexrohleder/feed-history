import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import "./LogsTable.scss";
import LogsTableRow from "./LogsTableRow";

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
            <th colSpan={2}>
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
            <LogsTableRow key={market.id} market={market} entries={entries} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LogsTable;
