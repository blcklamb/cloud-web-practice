import React from "react";
import Main from "./Main";
import PassingComponent from "./PassingComponent";

const ChildComponent = () => {
  return (
    <Main>
      <PassingComponent />
      <h3>넘겨지는 컴포넌트에요</h3>
      <img
        className="propsImage"
        src={
          "https://images.unsplash.com/photo-1694112867341-8a2087c50c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2655&q=80"
        }
        alt="componentImage"
      />
    </Main>
  );
};

export default ChildComponent;
