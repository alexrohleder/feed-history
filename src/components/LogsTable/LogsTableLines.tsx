import "./LogsTableLines.scss";
import LogsTableOutcomes from "./LogsTableOutcomes";
import { OUTCOME_BULK_SIZE } from "./LogsTableRow";

type Props = {
  specifiers: Record<string, FeedMarketSpecifier>;
  specifierExpansionMap: Record<string, number>;
};

function LogsTableLines(props: Props) {
  return (
    <td>
      <div className="lines">
        {Object.keys(props.specifiers).map((specifier) => {
          const { outcomes, status } = props.specifiers[specifier];

          return (
            <div key={specifier} className="line">
              <LogsTableOutcomes
                as="div"
                status={status}
                outcomes={outcomes.filter((_, index) =>
                  props.specifierExpansionMap[specifier]
                    ? index < props.specifierExpansionMap[specifier]
                    : index < OUTCOME_BULK_SIZE
                )}
              />
            </div>
          );
        })}
      </div>
    </td>
  );
}

export default LogsTableLines;
