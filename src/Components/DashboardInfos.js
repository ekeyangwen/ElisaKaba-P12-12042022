import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";
import VerticalInfos from "./VerticalInfos";
import useApi from "../utils/const/api/useApi";
import VerticalNavbar from "./VerticalNavbar";

const DashboardInfos = () => {
  const { id } = useParams();

  const dataMain = useApi(`../data/dataInfoUser${id}.json`);
  const speedAccesData = dataMain.data;

  // if (({ id } = !`dataInfoUser${id}`)) {
  //   return <Navigate to="*" />;
  // }

  return (
    <div>
      <section className="dashboard">
        <section className="vertical">
          <VerticalNavbar />
        </section>
        <section className="nameAndGrafiks">
          <h1 className="bonjour">
            Bonjour{" "}
            <span className="name">
              {speedAccesData && speedAccesData.userInfos.firstName}
            </span>
            <h2 className="felicitation">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </h2>
            {/* {userSession[0].sessionLength}
            // // {user && userSession.day} */}
          </h1>

          <section className="grafiksAndInfos">
            <section className="grafiks">
              <div className="grafiksBar">
                <GrafikBar />
              </div>
              <div className="otherGrafiks">
                <GrafikLine />
                <GrafikRadar />
                <GrafikPie
                  data={dataMain}
                  score={speedAccesData && speedAccesData.todayScore.score}
                />
              </div>{" "}
            </section>
            <section className="verticalbar">
              <div className="infos">
                <VerticalInfos
                  user={speedAccesData && speedAccesData.keyData}
                />
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DashboardInfos;
