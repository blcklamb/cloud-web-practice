import React from "react";
import { CheckboxContext } from "./CheckboxContext";

const CheckboxGroup = ({ children, values, onChange }) => {
  const isChecked = (value) => values.include(value);

  const toggleValue = ({ checked, value }) => {
    if (checked) {
      console.log(value);
      onChange(values.concat(value));
    } else {
      onChange(values.filter((ele) => ele !== value));
    }
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxGroup;
