import "./BaseHeaderActionsMarketSelectionItem.scss";

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function BaseHeaderActionsMarketSelectionItem(props: Props) {
  return (
    <div className="BaseHeaderActionsMarketSelectionItem">
      <label>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
    </div>
  );
}

export default BaseHeaderActionsMarketSelectionItem;
