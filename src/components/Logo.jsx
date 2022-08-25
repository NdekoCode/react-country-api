import React from "react";
import logo from "../assets/img/drc.svg";
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo React" />
      <h3>Country API</h3>
    </div>
  );
};

export default Logo;
