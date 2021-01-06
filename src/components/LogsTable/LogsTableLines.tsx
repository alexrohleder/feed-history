import { useContext } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";
import { getSortedSpecifiers } from "../../lib/getSortedSpecifiers";
import "./LogsTableLines.scss";
import LogsTableOutcomes from "./LogsTableOutcomes";
import { OUTCOME_BULK_SIZE } from "./LogsTableRow";

type Props = {
  marketId: number;
  specifiers: Record<string, FeedMarketSpecifier>;
  specifierExpansionMap: Record<string, number>;
};

function LogsTableLines(props: Props) {
  const { isMarketSelected } = useContext(MarketSelectionContext);

  return (
    <td>
      <div className="lines">
        {getSortedSpecifiers(Object.keys(props.specifiers)).map((specifier) => {
          if (!isMarketSelected(props.marketId, specifier)) {
            return null;
          }

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
