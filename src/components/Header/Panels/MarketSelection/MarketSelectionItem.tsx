type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function MarketSelectionItem(props: Props) {
  return (
    <div className="MarketSelectionItem">
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

export default MarketSelectionItem;
