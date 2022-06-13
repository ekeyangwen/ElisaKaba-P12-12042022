import React from "react";

const VerticalInfos = ({ user }) => {
  return (
    <div>
      <div className="infosCount">
        <h2 className="calories">
          <div className="redImg">
            <img
              className="caloriesImg"
              src="../../img/background-red.png"
              alt="calories"
            />
          </div>
          <div className="calorieTitle">
            {user && user.keyData.calorieCount}kCal{" "}
            <div className="smallCalorieTitle"> Calories</div>
          </div>
        </h2>
        <h2 className="proteines">
          {" "}
          <div className="blueImg">
            <img
              className="proteinesImg"
              src="../../img/background-blue.png"
              alt="proteines"
            />
          </div>{" "}
          <div className="proteineTitle">
            {user && user.keyData.proteinCount}g
            <div className="smallProteineTitle">Proteines</div>{" "}
          </div>
        </h2>
        <h2 className="glucides">
          <img
            className="yellowImg"
            src="../../img/background-yellow.png"
            alt="glucides"
          />
          <div className="glucideTitle">
            {user && user.keyData.carbohydrateCount}g{" "}
            <div className="smallGlucideTitle">Glucides</div>
          </div>
        </h2>
        <h2 className="lipides">
          {" "}
          <img
            className="pinkImg"
            src="../../img/background-pink.png"
            alt="lipides"
          />{" "}
          <div className="lipideTitle">
            {user && user.keyData.lipidCount}g
            <div className="smallLipideTitle">Lipides</div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default VerticalInfos;
