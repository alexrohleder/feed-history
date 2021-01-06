import { useContext } from "react";
import { MarketSelectionContext } from "../../context/MarketSelectionContext";
import { getSortedSpecifiers } from "../../lib/getSortedSpecifiers";
import { OUTCOME_BULK_SIZE, OUTCOME_HEIGHT } from "./LogsTableRow";
import "./LogsTableRowHeader.scss";

type Props = {
  marketId: number;
  marketName: string;
  specifiers: Record<string, number>;
  specifierExpansionMap: Record<string, number>;
  setSpecifierExpansion: (specifier: string) => void;
};

type PropsExpander = {
  name: string;
  outcomesCount: number;
  expandedOutcomesCount?: number;
  onClick: () => void;
};

function LogsTableRowHeaderExpander(props: PropsExpander) {
  if (props.outcomesCount <= OUTCOME_BULK_SIZE) {
    return (
      <div style={{ height: props.outcomesCount * OUTCOME_HEIGHT }}>
        {props.name}
      </div>
    );
  }

  const height =
    (props.expandedOutcomesCount ?? OUTCOME_BULK_SIZE) * OUTCOME_HEIGHT;

  return (
    <div
      className="LogsTableRowHeaderExpander"
      style={{ height }}
      onClick={props.onClick}
    >
      {props.name}
    </div>
  );
}

function LogsTableRowHeader(props: Props) {
  const { isMarketSelected } = useContext(MarketSelectionContext);

  if (props.specifiers.default) {
    return (
      <th colSpan={2}>
        <LogsTableRowHeaderExpander
          name={props.marketName}
          outcomesCount={props.specifiers.default}
          expandedOutcomesCount={props.specifierExpansionMap.default}
          onClick={() => props.setSpecifierExpansion("default")}
        />
      </th>
    );
  }

  return (
    <>
      <th style={{ width: 125 }}>{props.marketName}</th>
      <th className="LogsTableRowHeader">
        {getSortedSpecifiers(Object.keys(props.specifiers)).map(
          (specifier) =>
            isMarketSelected(props.marketId, specifier) && (
              <LogsTableRowHeaderExpander
                key={specifier}
                name={specifier}
                outcomesCount={props.specifiers[specifier]}
                expandedOutcomesCount={props.specifierExpansionMap[specifier]}
                onClick={() => props.setSpecifierExpansion(specifier)}
              />
            )
        )}
      </th>
    </>
  );
}

export default LogsTableRowHeader;
