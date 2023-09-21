import { Fragment } from "react";
import CountryItem from "./CountryItem";

const CountryBoard = ({ data, onUpdate }) => {
  return (
    <div className="flexRow margin-bottom">
      {data.map((ele) => {
        return (
          <Fragment key={ele.id}>
            <CountryItem {...ele} onUpdate={onUpdate} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default CountryBoard;
