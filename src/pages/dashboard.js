import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import GrafikRadar from "../Components/GrafikRadar";
import VerticalInfos from "../Components/VerticalInfos";
import GrafikPie from "../Components/GrafikPie";
import GrafikLine from "../Components/GrafikLine";
import GrafikBar from "../Components/GrafikBar";
import users from "../Users";

const Dashboard = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [performance, setPerformance] = useState("");
  const [kind, setKind] = useState("");
  const [average, setAverage] = useState();

  useEffect(() => {
    fetch("../../../dataInfoUsers.json")
      .then((response) => response.json())
      .then((myJson) => {
        let userFind = myJson.find((user) => user.id === id);
        setUser(userFind);
      });
    console.log(user);

    fetch("../../../dataPerformanceUsers.json")
      .then((response) => response.json())
      .then((myJson) => {
        let performanceFind = myJson.find(
          (performance) => performance.userId === id
        );
        setPerformance(performanceFind);
      });

    fetch("../../../dataAverageSessionUsers.json")
      .then((response) => response.json())
      .then((myJson) => {
        let averageFind = myJson.find((average) => average.userId === id);
        setAverage(averageFind);
      });
  }, []);

  if (user === undefined) {
    return <Navigate to="*" />;
  }

  let usersInfos = user.userInfos;
  // let userSession = average.sessions;
  // console.log(userSession);

  return (
    <>
      <section className="dashboard">
        <section className="nameAndGrafiks">
          <h1 className="bonjour">
            Bonjour <span className="name">{user && usersInfos.firstName}</span>
            {/* {userSession[0].sessionLength}
        {user && userSession.day} */}
          </h1>
          {/* <div className="persoName"> </div>
      {users.forEach((info) => {
        let persoUser = document.getElementById("persoName");
        let useSingle = new users(info);
        persoUserr.innerHTML += userSingle.createWelcomeName();
      })} */}
          <div className="grafiksAndInfos">
            <div className="grafiksBar">
              <GrafikBar />
            </div>
            {/* <GrafikRadar performance={performance} kind={kind} id={id} /> */}

            <div className="otherGrafiks">
              <GrafikLine />
              <GrafikRadar />
              <GrafikPie />
            </div>
          </div>{" "}
        </section>
        <section className="verticalbar">
          <div className="infos">
            <VerticalInfos user={user} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
