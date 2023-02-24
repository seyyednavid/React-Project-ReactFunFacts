import React from "react";
import image from "../images/react-icon-small.png";

function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={image} alt="React icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">ReactCourse-project1</h4>
    </nav>
  );
}

export default Navbar;
