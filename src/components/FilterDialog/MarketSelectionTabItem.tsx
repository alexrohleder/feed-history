import "./MarketSelectionTabItem.scss";

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function MarketSelectionTabItem(props: Props) {
  return (
    <div className="MarketSelectionTabItem">
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

export default MarketSelectionTabItem;
