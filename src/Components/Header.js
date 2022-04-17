import React from "react";
import HorizontalNavbar from "./HorizontalNavbar";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="../../../img/sportsee.logo.png"
        alt="logo sportsee"
      ></img>
      <HorizontalNavbar />
    </div>
  );
};

export default Header;
