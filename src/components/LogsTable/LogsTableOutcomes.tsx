import "./LogsTableOutcomes.scss";

type Props = {
  status: MarketStatus;
  outcomes: MarketOutcome[];
};

function LogsTableOutcomes(props: Props) {
  return (
    <td>
      {props.outcomes.map((outcome) => (
        <div className="outcome" key={outcome.name}>
          <div className="outcome__name">{outcome.name}</div>
          <div className="outcome__odds">{outcome.odds}</div>
        </div>
      ))}
    </td>
  );
}

export default LogsTableOutcomes;
