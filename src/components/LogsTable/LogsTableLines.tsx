import LogsTableOutcomes from "./LogsTableOutcomes";
import "./LogsTableLines.scss";

type Props = {
  specifiers: Record<string, FeedMarketSpecifier>;
};

function LogsTableLines(props: Props) {
  return (
    <td>
      <div className="lines">
        {Object.keys(props.specifiers).map((specifier) => (
          <div key={specifier} className="line">
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
