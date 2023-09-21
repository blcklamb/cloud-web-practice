import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";

const Container = () => {
  const CITY = ["서울", "파리", "골드코스트", "캘리포니아"];
  const [checked, setChecked] = useState([]);

  const isCityChecked = (city) => checked.includes(city);

  const handleChange = (e) => {
    const { value, checked: targetChecked } = e.target;
    if (!targetChecked)
      setChecked((prev) => prev && prev.filter((ele) => ele !== value));
    else setChecked((prev) => prev && [...prev, value]);
  };

  return (
    <div className="container">
      <h1>Checkbox</h1>
      <div className="main flexCol">
        <CheckboxGroup
          total={CITY}
          values={checked}
          isChecked={isCityChecked}
          onChange={handleChange}
        />
        <p>선택 여부: {checked.toString()}</p>
      </div>
    </div>
  );
};

export default Container;
