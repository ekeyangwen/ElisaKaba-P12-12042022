import React from "react";
import { NavLink } from "react-router-dom";

const HomeBtn = ({ id }) => {
  const path = `/user/${id}`;
  return (
    <div>
      <NavLink to={path} className="user12">
        <button className="mock12">Données mockées user 12</button>
      </NavLink>
      <button className="api12">Données de l'API user 12</button>
      <button className="mock18">Données mockées user 18</button>
      <button className="api18">Données de l'API user 18</button>
    </div>
  );
};

export default HomeBtn;
