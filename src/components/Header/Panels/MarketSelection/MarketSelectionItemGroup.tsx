import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function MarketSelectionItemGroup(props: Props) {
  return (
    <div className="MarketSelectionItemGroup">
      <label>
        <input
          type="checkbox"
          title="You can only select specifiers of this market"
          disabled
        />
        {props.title}
      </label>
      <div className="MarketSelectionItemGroup_Body">{props.children}</div>
    </div>
  );
}

export default MarketSelectionItemGroup;
