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
  const specifierObj = entry.markets[marketId]?.specifiers[specifier];
  // const outcome = specifierObj?.outcomes?.[outcomeName];

  if (!specifierObj) {
    return <td key={entry.timestamp} colSpan={2} />;
  }

  let outcome;

  for (const k in specifierObj.outcomes) {
    if (specifierObj.outcomes[k].name === outcomeName) {
      outcome = specifierObj.outcomes[k];
      break;
    }
  }

  if (!outcome) {
    return <td key={entry.timestamp} colSpan={2} />;
  }

  const { status } = specifierObj;
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
