import React from "react";
import Mountain from "../assets/mountain.jpeg";
import Dessert from "../assets/dessert.jpeg";
import Aurora from "../assets/aurora.jpeg";
import Lake from "../assets/lake.jpeg";
import Sea from "../assets/sea.jpeg";
import "./multiimage.css";

const MultiImage = () => {
  const IMAGE = [Mountain, Dessert, Aurora, Lake, Sea];
  return (
    <div className="container">
      {IMAGE.map((ele, idx) => (
        <img src={ele} alt="" key={idx} />
      ))}
    </div>
  );
};

export default MultiImage;
