import React from "react";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#discover">Discover</a>
        </li>
        <li>
          <a href="#trips">Trips</a>
        </li>
        <li style={{ float: "right" }}>
          <a href="#community">Community</a>
        </li>
        <li>
          <a href="#more">More</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
