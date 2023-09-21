import { React, Fragment } from "react";

const CountryBoard = ({ data, onUpdate }) => {
  return (
    <>
      {data.map((ele) => {
        const { id, name, image } = ele;
        return (
          <Fragment key={id}>
            <div>
              <p>{name}</p>
              <img src={image} alt={name} />
            </div>
            <button className="basic-btn" onClick={() => onUpdate(id)}>
              업데이트
            </button>
          </Fragment>
        );
      })}
    </>
  );
};

export default CountryBoard;
