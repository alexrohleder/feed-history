import "./LogsTableOutcomes.scss";

type Props = {
  status: MarketStatus;
  outcomes: MarketOutcome[];
  timestamp: number;
  marketId: number;
};

function LogsTableOutcomes(props: Props) {
  return (
    <td data-timestamp={props.timestamp} data-market-id={props.marketId}>
      {props.outcomes.map((outcome) => {
        let title;
        let className = "outcome";

        if (outcome.changedFromOdds) {
          className += " changed";
          title = `This updated since the last message\nFrom ${outcome.changedFromOdds} to ${outcome.odds}`;
        }

        return (
          <div key={outcome.name} className={className} title={title}>
            <div className="outcome__name">{outcome.name}</div>
            <div className="outcome__odds">{outcome.odds}</div>
          </div>
        );
      })}
    </td>
  );
}

export default LogsTableOutcomes;
