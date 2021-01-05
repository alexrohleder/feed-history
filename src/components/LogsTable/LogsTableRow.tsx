import { useReducer } from "react";
import LogsTableLines from "./LogsTableLines";
import LogsTableOutcomes from "./LogsTableOutcomes";
import LogsTableRowHeader from "./LogsTableRowHeader";

type Props = {
  market: SportEventMarket;
  entries: FeedEntry[];
};

export const OUTCOME_HEIGHT = 21;
export const OUTCOME_BULK_SIZE = 3;

function LogsTableRow(props: Props) {
  const [specifierExpansionMap, setSpecifierExpansion] = useReducer(
    (state: Record<string, number>, specifier: string) => {
      return {
        ...state,
        [specifier]:
          props.market.specifiers[specifier] > state[specifier]
            ? state[specifier] + OUTCOME_BULK_SIZE
            : OUTCOME_BULK_SIZE * 2,
      };
    },
    {}
  );

  return (
    <tr>
      <LogsTableRowHeader
        marketName={props.market.name}
        specifiers={props.market.specifiers}
        specifierExpansionMap={specifierExpansionMap}
        setSpecifierExpansion={setSpecifierExpansion}
      />
      {props.entries.map((entry) => {
        if (entry.type === "Odds change") {
          if (entry.markets[props.market.id]) {
            const { specifiers } = entry.markets[props.market.id];

            if (specifiers.default) {
              return (
                <LogsTableOutcomes
                  key={entry.timestamp}
                  status={specifiers.default.status}
                  outcomes={specifiers.default.outcomes}
                />
              );
            }

            return (
              <LogsTableLines
                key={entry.timestamp}
                specifiers={specifiers}
                specifierExpansionMap={specifierExpansionMap}
              />
            );
          }
        }

        return (
          <td
            key={entry.timestamp}
            className="diagonal-bg"
            data-type={entry.type}
          />
        );
      })}
    </tr>
  );
}

export default LogsTableRow;
