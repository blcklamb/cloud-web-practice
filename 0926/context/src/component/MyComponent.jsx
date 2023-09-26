import React, { useContext } from "react";
import { UserContext } from "../context/user";

const MyComponent = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <div>
        <h1>MyComponent</h1>
        <div>{context}</div>
      </div>
      <UserContext.Consumer>
        {(value) => <div>{value}</div>}
      </UserContext.Consumer>
    </div>
  );
};

export default MyComponent;
