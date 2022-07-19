import React from "react";

const VerticalNavbar = () => {
  return (
    <section className="vertical">
      <div className="verticalLogo">
        <img
          className="logoVerticalNavbar"
          src="../../../img/icon-sitting.png"
          alt="logo sitting"
        ></img>
        <img
          className="logoVerticalNavbar"
          src="../../../img/icon-swiming.png"
          alt="logo swiming"
        ></img>
        <img
          className="logoVerticalNavbar"
          src="../../../img/icon-biking.png"
          alt="logo biking"
        ></img>
        <img
          className="logoVerticalNavbar"
          src="../../../img/icon-training.png"
          alt="logo training"
        ></img>
      </div>
      <p className="copyright">Copyright, SportSee 2020</p>
    </section>
  );
};

export default VerticalNavbar;
