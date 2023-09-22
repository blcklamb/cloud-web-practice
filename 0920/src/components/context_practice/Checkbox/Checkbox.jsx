import React, { useContext } from "react";
import { CheckboxContext } from "./CheckboxContext";

const Checkbox = ({ children, value, checked, onChange }) => {
  const context = useContext(CheckboxContext);

  console.log("checkbox", value);

  if (context) {
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    );
  }

  const { isChecked, toggleValue } = context;
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />
      {children}
    </label>
  );
};

export default Checkbox;
