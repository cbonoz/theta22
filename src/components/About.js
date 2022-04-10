import React from "react";
import { APP_DESC, APP_NAME } from "../util/constants";
import logo from "../assets/logo.png";

function About(props) {
  return (
    <div className="container about-container">
      <h1>About</h1>
      <img src={logo} className="about-image" />
      <h3>{APP_DESC}</h3>
    </div>
  );
}

export default About;
