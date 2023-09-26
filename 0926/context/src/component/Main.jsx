import React from "react";
import { UserContext } from "../context/user";
import MyComponent from "./MyComponent";

const Main = () => {
  return (
    <UserContext.Provider value={"BTS"}>
      <MyComponent />
    </UserContext.Provider>
  );
};

export default Main;
