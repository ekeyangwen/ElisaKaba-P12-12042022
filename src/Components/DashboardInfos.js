import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GrafikBar from "./GrafikBar";
import GrafikLine from "./GrafikLine";
import GrafikPie from "./GrafikPie";
import GrafikRadar from "./GrafikRadar";
import VerticalInfos from "./VerticalInfos";
import { useApi } from "../utils/useApi";
import VerticalNavbar from "./VerticalNavbar";
import { urlMockData } from "../utils/const/urlMockData";
import { urlApi } from "../utils/const/urlApi";
import { FetchContext } from "../utils/context/SrcContext";
import PropTypes from "prop-types";

/**
 *
 * @param {object} userInfos
 * @param {string} firstName
 * @param {number} score
 * @param {number} todayScore
 * @returns Dashboard page
 */
const DashboardInfos = (result) => {
  const { id } = useParams();

  const { fetch } = useContext(FetchContext);
  const url = fetch === "API" ? urlApi : urlMockData;
  const dataMain = useApi(url.userMainData(id));
  const dataAverage = useApi(url.userAverageData(id));
  const dataActivity = useApi(url.userActivityData(id));
  const dataPerformance = useApi(url.userPerformanceData(id));

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
            <span className="name">{dataMain.userInfos.firstName}</span>
          </h1>
          <h2 className="felicitation">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h2>
          <section className="grafiksAndInfos">
            <section className="grafiks">
              <div className="grafikBar">
                <GrafikBar activity={dataActivity} />
              </div>
              <div className="otherGrafiks">
                <div className="grafikLine">
                  <GrafikLine average={dataAverage} />
                </div>
                <div className="grafikRadar">
                  <GrafikRadar performance={dataPerformance} />
                </div>

                <div className="grafikPie">
                  <GrafikPie
                    score={dataMain.score}
                    todayScore={dataMain.todayScore}
                  />
                </div>
              </div>
            </section>
            <section className="verticalbar">
              <div className="infos">
                <VerticalInfos keyData={dataMain.keyData} />
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

DashboardInfos.propTypes = {
  firstName: PropTypes.string,
  sessions: PropTypes.array,
  kind: PropTypes.object,
  data: PropTypes.array,
};
export default DashboardInfos;
