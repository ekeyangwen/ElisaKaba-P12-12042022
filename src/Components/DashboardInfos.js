import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";
import VerticalInfos from "./VerticalInfos";
import useApi from "../utils/const/api/useApi";

const DashboardInfos = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  //   const [performance, setPerformance] = useState("");
  //   const [kind, setKind] = useState("");
  //   const [average, setAverage] = useState();

  // useEffect(() => {
  //   fetch("../../../dataInfoUsers.json")
  //     .then((response) => response.json())
  //     .then((myJson) => {
  //       let userFind = myJson.find((user) => user.id === id);
  //       setUser(userFind);
  //     });
  //   console.log(user);
  // }, []);

  const dataMain = useApi("../data/dataInfoUser12.json");
  console.log(dataMain);
  const speedAccesData = dataMain.data;

  // if ((speedAccesData.id = !speedAccesData && speedAccesData.id)) {
  //   return <Navigate to="*" />;
  // }

  return (
    <div>
      <section className="dashboard">
        <section className="nameAndGrafiks">
          <h1 className="bonjour">
            Bonjour{" "}
            <span className="name">
              {speedAccesData && speedAccesData.userInfos.firstName}
            </span>
            {/* {userSession[0].sessionLength}
            // // {user && userSession.day} */}
          </h1>
          <div className="grafiksAndInfos">
            <div className="grafiksBar">
              <GrafikBar />
            </div>

            <div className="otherGrafiks">
              <GrafikLine />
              <GrafikRadar />
              <GrafikPie
                data={speedAccesData}
                score={speedAccesData && speedAccesData.todayScore}
              />
            </div>
            <section className="verticalbar">
              <div className="infos">
                <VerticalInfos
                  user={speedAccesData && speedAccesData.keyData}
                />
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DashboardInfos;
