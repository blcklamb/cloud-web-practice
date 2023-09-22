import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";

const Container = () => {
  const CITY = ["서울", "파리", "골드코스트", "캘리포니아"];
  const [checkedCities, setCheckedCities] = useState([]);
  console.log("checkedCities", checkedCities);

  return (
    <div className="container">
      <h1>Container Checkbox</h1>
      <CheckboxGroup values={checkedCities} onChange={setCheckedCities}>
        {CITY.map((ele, idx) => (
          <Checkbox key={idx} value={ele} onChange={setCheckedCities}>
            {ele}
          </Checkbox>
        ))}
      </CheckboxGroup>
      {/* <footer>[{checked.join(",")}]을 좋아하시군요!</footer> */}
    </div>
  );
};

export default Container;
