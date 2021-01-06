import { ReactNode } from "react";
import "./MarketSelectionTabItemList.scss";

type Props = {
  title: string;
  children: ReactNode;
};

function MarketSelectionTabItemList(props: Props) {
  return (
    <div className="MarketSelectionTabItemList">
      <label>
        <input
          type="checkbox"
          title="You can only select specifiers of this market"
          disabled
        />
        {props.title}
      </label>
      <div className="MarketSelectionTabItemList_Body">{props.children}</div>
    </div>
  );
}

export default MarketSelectionTabItemList;
