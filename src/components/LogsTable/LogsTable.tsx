import { useState } from "react";
import useSWR from "swr";
import { toDateTime } from "../../lib/timestamp";
import "./LogsTable.scss";
import LogsTableFooter from "./LogsTableFooter";
import LogsTableRow from "./LogsTableRow";

function LogsTable() {
  const [page, setPage] = useState(0);
  const feed = useSWR<Feed>(`feed?page=${page}`);
  const event = useSWR<SportEvent>("event");

  return (
    <>
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
              {feed.data!.entries.map((entry) => (
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
            {event.data!.markets.map((market) => (
              <LogsTableRow
                key={market.id}
                market={market}
                entries={feed.data!.entries}
              />
            ))}
          </tbody>
        </table>
      </div>
      <LogsTableFooter
        page={page}
        pageCount={feed.data!.pageCount}
        setPage={setPage}
      />
    </>
  );
}

export default LogsTable;
