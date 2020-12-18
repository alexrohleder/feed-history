import LogsTableOutcomes from "./LogsTableOutcomes";
import "./LogsTableLines.scss";

type Props = {
  specifiers: Record<string, MarketSpecifier>;
  outcomesPerLine: number;
};

const OUTCOME_HEIGHT = 21;

function LogsTableLines(props: Props) {
  return (
    <td>
      <div className="lines">
        {Object.keys(props.specifiers).map((specifier) => (
          <div
            key={specifier}
            className="line"
            style={{ height: OUTCOME_HEIGHT * props.outcomesPerLine }}
          >
            <LogsTableOutcomes
              as="div"
              outcomes={props.specifiers[specifier].outcomes}
              status={props.specifiers[specifier].status}
            />
          </div>
        ))}
      </div>
    </td>
  );
}

export default LogsTableLines;
