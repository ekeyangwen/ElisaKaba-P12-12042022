import React from "react";
import { userList } from "../utils/const/userList";
import { NavLink } from "react-router-dom";

const UserInfosPage = () => {
  return (
    <div className="homeBtn">
      {userList.map((user) => (
        <NavLink to={`user/${user.id}`} key={user.id} className="getUser">
          <button className="mock" key={user.id}>
            user {user.id} switch mode
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default UserInfosPage;
