import React from "react";
import { NavLink } from "react-router-dom";

const HomeBtn = ({ user }) => {
  const { id } = user;
  const path = `/user/${id}`;
  console.log(path);

  return (
    <div className="homeBtn">
      <NavLink to={path} className="getUser12">
        <button className="mock12">Données mockées user 18</button>{" "}
      </NavLink>
      <NavLink to={path} className="getUser18">
        {" "}
        <button className="mock18"> Données mockées user 12</button>
      </NavLink>{" "}
    </div>
  );
};

export default HomeBtn;
