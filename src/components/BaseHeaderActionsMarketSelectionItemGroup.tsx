import { ReactNode } from "react";
import "./BaseHeaderActionsMarketSelectionItemGroup.scss";

type Props = {
  title: string;
  children: ReactNode;
};

function BaseHeaderActionsMarketSelectionItemGroup(props: Props) {
  return (
    <div className="BaseHeaderActionsMarketSelectionItemGroup">
      <label>
        <input
          type="checkbox"
          title="You can only select specifiers of this market"
          disabled
        />
        {props.title}
      </label>
      <div className="BaseHeaderActionsMarketSelectionItemGroup_Body">
        {props.children}
      </div>
    </div>
  );
}

export default BaseHeaderActionsMarketSelectionItemGroup;
