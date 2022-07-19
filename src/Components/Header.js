import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalNavbar from "./HorizontalNavbar";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logoNav">
        <img
          className="logo"
          src="../../../img/sportsee.logo.png"
          alt="logo sportsee"
        ></img>
      </NavLink>
      <HorizontalNavbar />
    </div>
  );
};

export default Header;
