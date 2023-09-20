import React from "react";

const Main = ({ children }) => {
  return (
    <div className="container">
      <div className="main">
        Main
        {children.map((ele, idx) => {
          return (
            <React.Fragment key={idx}>
              {ele}
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
