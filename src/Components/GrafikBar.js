import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

const GrafikBar = ({ activity }) => {
  const maDate = [
    { id: 1, date: new Date("2020-07-01") },
    { id: 2, date: new Date("2020-07-02") },
    { id: 3, date: new Date("2020-07-03") },
    { id: 4, date: new Date("2020-07-04") },
    { id: 5, date: new Date("2020-07-05") },
    { id: 6, date: new Date("2020-07-06") },
    { id: 7, date: new Date("2020-07-07") },
  ];

  // const dayNumber = Object.values(maDate).map((date) => {
  //   console.log(date);
  //   const number = date.id;
  //   console.log(number);
  //   return number;
  // });

  // const grafikNumber = Object.values(dayNumber);
  // // const newDate = maDate.toLocaleDateString("fr");
  // console.log(grafikNumber);

  return (
    <div className="bar">
      <div className="legend">
        <p className="dayActivity">Activité quotidienne</p>{" "}
        <div className="weightAndCalorie">
          <p className="weight">
            <span className="weightPoint">
              <img
                className="blackOval"
                src="../../../img/blackOval.png"
                alt="Black Point"
              ></img>
            </span>
            Poids (kg)
          </p>
          <p className="calorie">
            {" "}
            <span className="caloriePoint">
              <img
                className="redOval"
                src="../../../img/redOval.png"
                alt="Red Point"
              ></img>
            </span>
            Calories brûlées (kCal)
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={activity.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis data={maDate} dataKey="id" tick={false} stroke="#fffff" />
          <YAxis
            hide={false}
            orientation="right"
            tick={{ fill: "#DEDEDE" }}
            stroke="#DEDEDE"
          />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={5} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={5} />
          <Tooltip
            cursor={{
              fill: "#C4C4C480",
            }}
            fill="#E60000"
            // onMouseOver={{ fontFamily: "Roboto", fontSize: "7px", color:"red" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafikBar;
