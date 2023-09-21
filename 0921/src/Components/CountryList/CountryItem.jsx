import React from "react";

const CountryItem = ({ id, name, image, onUpdate }) => {
  return (
    <div className="country-item">
      <div>
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
      <button
        className="basic-btn nation-update-btn "
        onClick={() => onUpdate(id)}
      >
        업데이트
      </button>
    </div>
  );
};

export default CountryItem;
