import React from "react";
import { APP_DESC, APP_NAME } from "../util/constants";
import logo from '../assets/logo.png'

function About(props) {
  return <div className="container">About

  <p>{APP_NAME}</p>


  <img src={logo}/>

  <p>{APP_DESC}</p>
  
  </div>;
}

export default About;
