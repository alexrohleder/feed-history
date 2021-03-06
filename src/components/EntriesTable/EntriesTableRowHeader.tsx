import { ReactNode } from "react";
import useSpecifierExpansion from "./hooks/useSpecifierExpansion";

type Props = {
  specifier: { name: string; rows: ReactNode[] };
  isFirstRow: boolean;
  isFirstSpecifier: boolean;
  isSearchingOutcomes: boolean;
  marketRowSpan: number;
  market: SportEventMarket;
  expansion: ReturnType<typeof useSpecifierExpansion>;
};

function EntriesTableRowHeader({
  specifier,
  isFirstRow,
  isFirstSpecifier,
  isSearchingOutcomes,
  marketRowSpan,
  market,
  expansion,
}: Props) {
  const header: ReactNode[] = [];

  if (isFirstRow && isFirstSpecifier) {
    header.push(
      <th
        key="market"
        rowSpan={marketRowSpan}
        className="market"
        title={market.name}
      >
        {market.name}
      </th>
    );
  }

  if (isFirstRow) {
    header.push(
      <th
        key="specifier"
        rowSpan={specifier.rows.length}
        className="specifier"
        title={specifier.name}
      >
        {specifier.name}
      </th>
    );

    const isIncreasable = expansion.isIncreasable(market, specifier.name);
    const isDecreasable = expansion.isDecreasable(market, specifier.name);

    header.push(
      <th key="actions" className="actions" rowSpan={specifier.rows.length}>
        {(isIncreasable || isDecreasable) && !isSearchingOutcomes && (
          <>
            <button
              disabled={!isIncreasable}
              onClick={() => expansion.increase(market, specifier.name)}
              title={`Expand outcomes of specifier ${specifier.name} on market ${market.name}`}
            >
              +
            </button>
            <button
              disabled={!isDecreasable}
              onClick={() => expansion.decrease(market, specifier.name)}
              title={`Collapse outcomes of specifier ${specifier.name} on market ${market.name}`}
            >
              -
            </button>
          </>
        )}
      </th>
    );
  }

  return <>{header}</>;
}

export default EntriesTableRowHeader;
