import { useState } from "react";
import useSWR from "swr";
import { toDateTime } from "../lib/timestamp";
import "./BaseHeader.scss";
import BaseHeaderActions from "./BaseHeaderActions";

function BaseHeader() {
  const { data, error } = useSWR<SportEvent>("event");

  if (error) {
    return null;
  }

  return (
    <header className="BaseHeader">
      <div className="BaseHeader_Meta">
        <h1>Feed History</h1>
        {data && (
          <>
            <h2>{data.name}</h2>
            <h3>{toDateTime(data.timestamp)} UTC</h3>
            <h4>({data.urn})</h4>
          </>
        )}
      </div>
      {data && <BaseHeaderActions markets={data.markets} />}
    </header>
  );
}

export default BaseHeader;
