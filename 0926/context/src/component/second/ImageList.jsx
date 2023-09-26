import { useState, useEffect } from "react";
import Place from "./Place";
import { countryData } from "../../utils/getCountryData";

const ImageList = () => {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    setPlaceData(countryData());
  }, []);

  return (
    <div>
      {placeData.map((ele, idx) => (
        <Place key={idx} {...ele} />
      ))}
    </div>
  );
};

export default ImageList;
