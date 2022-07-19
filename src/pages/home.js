import React from "react";
import UserInfosPage from "../Components/UserInfosPage";
import VerticalNavbar from "../Components/VerticalNavbar";

const Home = () => {
  return (
    <section className="home">
      <VerticalNavbar />
      <UserInfosPage />
    </section>
  );
};

export default Home;
