import React from "react";
import "./LogsTableOutcomes.scss";

type Props = {
  status: FeedMarketStatus;
  outcomes: FeedMarketOutcome[];
  as?: string;
};

function LogsTableOutcomes({ as = "td", ...props }: Props) {
  if (props.outcomes.length === 0) {
    return null;
  }

  return React.createElement(
    as,
    null,
    props.outcomes.map((outcome) => {
      let title;
      let className = "outcome";

      if (typeof outcome.changedFromOdds === "number") {
        className += " changed";
        title = `This updated since the last message\nFrom ${outcome.changedFromOdds} to ${outcome.odds}`;
      }

      return (
        <div key={outcome.name} className={className} title={title}>
          <div className="outcome__name">{outcome.name}</div>
          <div className="outcome__odds">{outcome.odds.toFixed(2)}</div>
        </div>
      );
    })
  );
}

export default LogsTableOutcomes;
