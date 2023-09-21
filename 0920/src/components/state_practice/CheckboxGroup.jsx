import React from "react";
import Checkbox from "./Checkbox";

const CheckboxGroup = ({ values, onChange }) => {
  const isChecked = (value) => values.includes(value);
  const toggleValue = ({ checked, value }) => {
    if (checked) onChange(values.concat(value));
    else onChange(values.filter((ele) => ele !== value));
  };
  return (
    <div>
      <Checkbox label={"서울"} isChecked={isChecked} onChange={toggleValue} />
      <Checkbox label={"파리"} isChecked={isChecked} onChange={toggleValue} />
      <Checkbox
        label={"골드코스트"}
        isChecked={isChecked}
        onChange={toggleValue}
      />
    </div>
  );
};

export default CheckboxGroup;
