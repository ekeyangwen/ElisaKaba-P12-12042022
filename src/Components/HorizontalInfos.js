import React from "react";

const HorizontalInfos = ({ user }) => {
  let keysData = user.keyData;
  return (
    <div>
      <div className="InfosCount">
        <h2 className="calories">
          <img
            className="caloriesImg"
            src="../../img/flamme.png"
            alt="calories"
          />
          {user && keysData.calorieCount} Calories
        </h2>
        <h2 className="proteines">
          {" "}
          <img
            className="proteinesImg"
            src="../../img/os.png"
            alt="proteines"
          />
          {user && keysData.proteinCount} Proteines
        </h2>
        <h2 className="glucides">
          <img
            className="glucidesImg"
            src="../../img/pomme.png"
            alt="glucides"
          />
          {user && keysData.lipidCount} Glucides
        </h2>
        <h2 className="lipides">
          {" "}
          <img
            className="lipidesImg"
            src="../../img/cheeseburger.png"
            alt="lipides"
          />
          {user && keysData.carbohydrateCount} Lipides
        </h2>
      </div>
    </div>
  );
};

export default HorizontalInfos;
