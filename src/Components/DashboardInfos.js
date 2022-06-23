import React from "react";
import { useParams } from "react-router-dom";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";
import VerticalInfos from "./VerticalInfos";
import useApi from "../utils/useApi";
import VerticalNavbar from "./VerticalNavbar";

const DashboardInfos = () => {
  const { id } = useParams();

  const dataMain = useApi(`../data/dataInfoUser${id}.json`);
  const dataAverage = useApi(`../data/${id}/dataAverageSessionsUser.json`);
  const dataActivity = useApi(`../data/${id}/dataActivityUser.json`);
  const dataPerformance = useApi(`../data/${id}/dataPerformanceUser.json`);

  if (
    dataMain === null ||
    dataAverage === null ||
    dataActivity === null ||
    dataPerformance === null
  ) {
    return <p>Chargement</p>;
  }

  return (
    <div>
      <section className="dashboard">
        <VerticalNavbar />
        <section className="nameAndGrafiks">
          <h1 className="bonjour">
            Bonjour {""}
            <span className="name">
              {dataMain.data && dataMain.data.userInfos.firstName}
            </span>
          </h1>
          <h2 className="felicitation">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h2>
          <section className="grafiksAndInfos">
            <section className="grafiks">
              <div className="grafikBar">
                <GrafikBar activity={dataActivity && dataActivity.data} />
              </div>

              <div className="otherGrafiks">
                <div className="line">
                  <GrafikLine average={dataAverage && dataAverage.data} />
                </div>
                <div className="radar">
                  <GrafikRadar
                    performance={dataPerformance.data && dataPerformance.data}
                  />
                </div>
                <div className="pie">
                  <GrafikPie score={dataMain && dataMain.data} />
                </div>
              </div>
            </section>
            <section className="verticalbar">
              <div className="infos">
                <VerticalInfos user={dataMain && dataMain.data} />
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default DashboardInfos;
