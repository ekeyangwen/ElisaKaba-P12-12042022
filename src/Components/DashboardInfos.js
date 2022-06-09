import React from "react";
import { useParams } from "react-router-dom";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";
import VerticalInfos from "./VerticalInfos";
import useApi from "../utils/const/api/useApi";
import VerticalNavbar from "./VerticalNavbar";

const DashboardInfos = () => {
  const { id } = useParams();
  console.log("DasboardInfos");
  const dataMain = useApi(`../data/dataInfoUser${id}.json`);
  console.log(dataMain);
  const speedAccesDataMain = dataMain.data;
  const dataActivity = useApi(`http://localhost:3000/user/12/activity`);
  console.log(dataActivity);
  console.log(dataActivity.userId);
  console.log(dataActivity.sessions);

  const dataAverage = useApi(`../data/18/dataAverageSessionsUser.json`);
  const speedAccesDataActivity = dataActivity.data;
  const speedAccesDataAverage = dataAverage.sessions;
  // const dataActivityMap = speedAccesDataActivity.forEach((session) => {
  // console.log(dataActivity);
  // console.log(dataActivity.data);
  // });

  // console.log(dataActivityMap);
  // console.log(speedAccesDataActivity);
  // console.log(speedAccesDataActivity.sessions);
  // console.log(
  //   dataActivity.data.sessions[0]
  // .map((session) => {
  //   return console.log(session[0]);
  // })
  // dataActivity.data.sessions.map((session) => {
  //   console.log("Hello");
  // });

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
              {speedAccesDataMain && speedAccesDataMain.userInfos.firstName}
            </span>
          </h1>
          <h2 className="felicitation">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h2>
          <section className="grafiksAndInfos">
            <section className="grafiks">
              <div className="grafiksBar">
                <GrafikBar data={dataActivity} />
              </div>
              <div className="otherGrafiks">
                <GrafikLine />
                <GrafikRadar />
                <GrafikPie
                  data={dataMain}
                  score={
                    speedAccesDataMain && speedAccesDataMain.todayScore.score
                  }
                />
              </div>{" "}
            </section>
            <section className="verticalbar">
              <div className="infos">
                <VerticalInfos
                  user={speedAccesDataMain && speedAccesDataMain.keyData}
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
