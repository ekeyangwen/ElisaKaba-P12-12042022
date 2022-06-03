import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import GrafikRadar from "../Components/GrafikRadar";
import HorizontalInfos from "../Components/HorizontalInfos";
import GrafikPie from "../Components/GrafikPie";

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
    <div>
      <h1 className="bonjour">
        Bonjour {user && usersInfos.firstName}
        {/* {userSession[0].sessionLength} */}
        {/* {user && userSession.day} */}
      </h1>
      <div className="grafiksAndInfos">
        <div className="grafiks">
          {/* <GrafikRadar performance={performance} kind={kind} id={id} /> */}
          <GrafikPie />
        </div>
        <div className="infos">
          <HorizontalInfos user={user} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
