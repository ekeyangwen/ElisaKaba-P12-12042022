import React from "react";
import { useState, useEffect } from "react";
import VerticalInfos from "./VerticalInfos";
import { Navigate, useParams } from "react-router-dom";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";

const UserPage = () => {
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
  let todayScore = user.todayScore;
  // let userSession = average.sessions;
  console.log(todayScore);

  return (
    <>
      <section className="dashboard">
        <section className="nameAndGrafiks">
          <h1 className="bonjour">
            Bonjour <span className="name">{user && usersInfos.firstName}</span>
            {/* {userSession[0].sessionLength}
            // {user && userSession.day} */}
          </h1>
          <div className="grafiksAndInfos">
            <div className="grafiksBar">
              <GrafikBar />
            </div>

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

export default UserPage;
