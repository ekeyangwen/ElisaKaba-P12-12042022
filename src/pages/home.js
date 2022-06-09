import React from "react";
import UserInfosPage from "../Components/UserInfosPage";
import VerticalNavbar from "../Components/VerticalNavbar";

const Home = () => {
  return (
    <div className="home">
      <VerticalNavbar />
      <UserInfosPage />
    </div>
  );
};

export default Home;
