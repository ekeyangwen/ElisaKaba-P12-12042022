import React from "react";
import HomeBtn from "./HomeBtn";
import { userList } from "../utils/const/userList";
import { NavLink } from "react-router-dom";
const UserInfosPage = () => {
  return (
    <div className="user">
      {userList.map((user) => (
        <div className="homeBtn">
          <NavLink to={`user/${user.id}`} className="getUser">
            <button className="mock">user {user.id}</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default UserInfosPage;
