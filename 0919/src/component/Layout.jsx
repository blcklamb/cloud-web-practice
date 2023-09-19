import React from "react";
import "./layout.css";

const Header = () => {
  return <h1 className="header">Header</h1>;
};

const Main = () => {
  return <h1 className="main">Main</h1>;
};

const Footer = () => {
  return <h1 className="footer">Footer</h1>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
