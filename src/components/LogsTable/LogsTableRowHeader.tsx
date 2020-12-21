import { OUTCOME_BULK_SIZE, OUTCOME_HEIGHT } from "./LogsTableRow";
import "./LogsTableRowHeader.scss";

type Props = {
  marketName: string;
  specifiers: Record<string, number>;
};

function LogsTableRowHeaderExpander(props: {
  name: string;
  outcomesCount: number;
}) {
  const style = {
    height: props.outcomesCount * OUTCOME_HEIGHT,
  };

  if (props.outcomesCount <= OUTCOME_BULK_SIZE) {
    return <div style={style}>{props.name}</div>;
  }

  return (
    <div className="LogsTableRowHeaderExpander" style={style}>
      {props.name}
    </div>
  );
}

function LogsTableRowHeader(props: Props) {
  if (props.specifiers.default) {
    return (
      <th className="LogsTableRowHeader">
        <LogsTableRowHeaderExpander
          name={props.marketName}
          outcomesCount={props.specifiers.default}
        />
      </th>
    );
  }

  return (
    <th className="LogsTableRowHeader">
      <div className="LogsTableRowHeader-SpecifiersContainer">
        {props.marketName}
        <div className="LogsTableRowHeader-Specifiers">
          {Object.keys(props.specifiers).map((specifier) => (
            <LogsTableRowHeaderExpander
              name={specifier}
              outcomesCount={props.specifiers[specifier]}
            />
          ))}
        </div>
      </div>
    </th>
  );
}

export default LogsTableRowHeader;
