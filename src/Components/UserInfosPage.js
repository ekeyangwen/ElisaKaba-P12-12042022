import React from "react";
import { userList } from "../utils/const/userList";
import { NavLink } from "react-router-dom";
import ContextBtn from "./ContextBtn";

const UserInfosPage = () => {
  return (
    <div className="homeBtn">
      <div className="usersBtn">
        {userList.map((user) => (
          <NavLink to={`user/${user.id}`} key={user.id} className="getUser">
            <button className="dashboardBtn" key={user.id}>
              user {user.id}
            </button>
          </NavLink>
        ))}
      </div>
      <ContextBtn />
    </div>
  );
};

export default UserInfosPage;
