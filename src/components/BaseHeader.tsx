import useSWR from "swr";
import { toDateTime } from "../lib/timestamp";
import "./BaseHeader.scss";

function BaseHeader() {
  const { data, error } = useSWR<SportEvent>("event");

  if (error) {
    return null;
  }

  return (
    <header className="base-header">
      <div className="base-header__meta">
        <h1>Feed History</h1>
        {data && (
          <>
            <h2>{data.name}</h2>
            <h3>{toDateTime(data.timestamp)} UTC</h3>
            <h4>({data.urn})</h4>
          </>
        )}
      </div>
    </header>
  );
}

export default BaseHeader;
