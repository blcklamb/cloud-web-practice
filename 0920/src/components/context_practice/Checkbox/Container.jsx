import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./Checkbox";

const Container = () => {
  const CITY = ["서울", "파리", "골드코스트", "캘리포니아"];
  const [checkedCities, setCheckedCities] = useState([]);

  return (
    <div className="container">
      <h1>Container Checkbox</h1>
      <div className="main flexCol">
        <CheckboxGroup values={checkedCities} onChange={setCheckedCities}>
          {CITY.map((ele, idx) => (
            <Checkbox key={idx} value={ele} onChange={setCheckedCities}>
              {ele}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <footer>[{checkedCities.join(",")}]을 좋아하시군요!</footer>
      </div>
    </div>
  );
};

export default Container;
