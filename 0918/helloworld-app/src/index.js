import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const insertElement = React.createElement(
  "p",
  {},
  "JSX를 이용하지 않고 새로운 element 추가"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  insertElement
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
