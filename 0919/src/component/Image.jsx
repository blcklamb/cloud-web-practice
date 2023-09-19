import React from "react";
import Dessert from "../assets/dessert.jpeg";
import Mountain from "../assets/mountain.jpeg";

const Image = () => {
  const divStyle = {
    border: "0.1rem solid teal",
    padding: "0.5rem",
    margin: "0.5rem",
  };

  const imgStyle = {
    width: "50vh",
  };

  const bgStyle = {
    backgroundImage: `url(${Mountain})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
  };

  const extBgStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/10042038/pexels-photo-10042038.jpeg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
  };

  const h3Style = { color: "white" };

  const dixFlexStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };

  return (
    <div>
      <div style={bgStyle}>
        <h3 style={h3Style}>Local Background Image</h3>
      </div>
      <div style={extBgStyle}>
        <h3 style={h3Style}>External Background Image</h3>
      </div>
      <div style={dixFlexStyle}>
        <div style={divStyle}>
          <h3>Local Image</h3>
          <img src={Dessert} style={imgStyle} alt="localImage"></img>
        </div>
        <div style={divStyle}>
          <h3>External Image</h3>
          <img
            src="https://picsum.photos/200/200"
            style={imgStyle}
            alt="externalImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
