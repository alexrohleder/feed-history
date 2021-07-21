import { ReactNode } from "react";

type Props = {
  entry: FeedEntry;
  marketId: number;
  specifier: string;
  outcomeName: string;
};

const STATUS_COLOR = ["", "#fecaca", "#fed7aa"];
const INACTIVE_COLOR = "#e4e4e7";

function EntriesTableCol({ entry, marketId, specifier, outcomeName }: Props) {
  if (entry.type !== "odds_change") {
    return <td key={entry.timestamp} className="empty" />;
  }

  const cols: ReactNode[] = [];
  const specifierObj = entry.markets[marketId].specifiers[specifier];
  const { outcomes, status } = specifierObj;
  const outcome = outcomes[outcomeName];

  const odds = outcome.odds.toFixed(2);
  const changedFromOdds = outcome.changedFromOdds?.toFixed(2);

  const style = {
    // we apply inline styles so it appears on the exported xls
    backgroundColor: outcome.active ? STATUS_COLOR[status] : INACTIVE_COLOR,
  };

  cols.push(
    <td
      key={`${entry.timestamp}:n`}
      className="outcome-name"
      title={outcome.name}
      style={style}
    >
      {outcome.name}
    </td>
  );

  cols.push(
    <td
      key={`${entry.timestamp}:o`}
      className="outcome-odds"
      title={odds}
      style={style}
    >
      {odds}
      {changedFromOdds && (
        <div
          className="outcome-odds-changed"
          title={`Odds changed from ${changedFromOdds} to ${odds}`}
        />
      )}
    </td>
  );

  return <>{cols}</>;
}

export default EntriesTableCol;
