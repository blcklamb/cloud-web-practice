const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={label}
        checked={({ target: { value } }) => isChecked(value)}
        onChange={({ target: { checked, value } }) => {
          onChange({ checked: checked, value });
        }}
      />
      {label}
    </label>
  );
};

export default Checkbox;
