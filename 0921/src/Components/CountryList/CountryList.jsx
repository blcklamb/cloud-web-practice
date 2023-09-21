import { useState } from "react";
import allCountry from "./country.json";
import CountryBoard from "./CountryBoard";

const CountryList = () => {
  const getImageURL = (code) => `https://flagsapi.com/${code}/shiny/64.png`;

  const pickRandomCountry = (n) => {
    const pickedCountry = [];
    const keys = Object.keys(allCountry);
    for (let i = 0; i < n; i++) {
      let random = keys[(keys.length * Math.random()) << 0];
      let value = allCountry[random];
      pickedCountry.push({
        id: i,
        code: random,
        name: value,
        image: getImageURL(random),
      });
    }
    return pickedCountry;
  };

  const [country, setCountry] = useState(pickRandomCountry(5));
  const [updatedCountry, setUpdatedCountry] = useState({ code: "", name: "" });

  const onChangeSelect = (e) => {
    const code = e.target.value;
    setUpdatedCountry({ code: code, name: allCountry[code] });
  };

  const updateState = (updateIdx) => {
    const { code: updatedCode, name: updatedName } = updatedCountry;
    const newState = country.map((ele) =>
      ele.id === updateIdx
        ? {
            id: updateIdx + 5,
            code: updatedCode,
            name: updatedName,
            image: getImageURL(updatedCode),
          }
        : ele
    );
    setCountry(newState);
  };

  const updateAll = () => setCountry(pickRandomCountry(5));

  return (
    <div className="container">
      <select name="country" id="country" onChange={onChangeSelect}>
        {Object.entries(allCountry).map(([key, value], idx) => {
          return (
            <option key={idx} value={key}>
              {value}
            </option>
          );
        })}
      </select>

      <CountryBoard data={country} onUpdate={updateState} />
      <div>
        <button className="basic-btn update-btn" onClick={updateAll}>
          전부 업데이트
        </button>
      </div>
    </div>
  );
};

export default CountryList;
