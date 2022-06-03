import React from "react";

const HorizontalInfos = ({ user }) => {
  let keysData = user.keyData;
  return (
    <div>
      <div className="infosCount">
        <h2 className="calories">
          <img
            className="caloriesImg"
            src="../../img/flamme.png"
            alt="calories"
          />
          {user && keysData.calorieCount}kCal Calories
        </h2>
        <h2 className="proteines">
          {" "}
          <div className="imgCarre">
            <img
              className="proteinesImg"
              src="../../img/background-blue.png"
              alt="proteines"
            />
          </div>
          {user && keysData.proteinCount}g Proteines
        </h2>
        <h2 className="glucides">
          <img
            className="glucidesImg"
            src="../../img/pomme.png"
            alt="glucides"
          />
          {user && keysData.carbohydrateCount}g Glucides
        </h2>
        <h2 className="lipides">
          {" "}
          <img
            className="lipidesImg"
            src="../../img/cheeseburger.png"
            alt="lipides"
          />
          {user && keysData.lipidCount}g Lipides
        </h2>
      </div>
    </div>
  );
};

export default HorizontalInfos;
