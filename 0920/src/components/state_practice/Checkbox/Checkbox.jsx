const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={label}
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
