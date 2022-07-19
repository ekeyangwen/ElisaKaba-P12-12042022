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
import PropTypes from "prop-types";

/**
 *
 * @returns Barchart Grafik
 */

const GrafikBar = ({ activity }) => {
  function customDateFormatter(tick) {
    if (tick === "2020-07-01") {
      return "1";
    }
    if (tick === "2020-07-02") {
      return "2";
    }
    if (tick === "2020-07-03") {
      return "3";
    }
    if (tick === "2020-07-04") {
      return "4";
    }
    if (tick === "2020-07-05") {
      return "5";
    }
    if (tick === "2020-07-06") {
      return "6";
    }
    if (tick === "2020-07-07") {
      return "7";
    }
  }

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="toolTips">
          <p className="payload">{`${payload[0].value} kg`}</p>
          <p className="payload">{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="legend">
        <p className="dayActivity">Activité quotidienne</p>
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
      <div className="bar">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={50} height={300} data={activity.sessions}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              tickFormatter={customDateFormatter}
              dataKey="day"
              tick={{ fill: "#9B9EAC" }}
              fontFamily="Roboto"
              stroke="border: 1px solid #DEDEDE"
            />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              domain={["dataMin-7", "dataMax+3"]}
              orientation="right"
              tick={{ fill: "#9B9EAC" }}
              stroke="#FBFBFB"
              tickLine={false}
              tickMargin={30}
            />
            <YAxis
              dataKey="calories"
              domain={[0, "dataMax+20"]}
              hide={true}
              orientation="left"
              stroke="#FBFBFB"
            />
            <Bar
              yAxisId="kilogram"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[5, 5, 0, 0]}
            />
            <Tooltip
              content={<CustomToolTip />}
              cursor={{
                fill: "#C4C4C480",
              }}
              fontFamily="Roboto"
              fill="#ff0101"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
GrafikBar.propTypes = {
  activity: PropTypes.object,
};
export default GrafikBar;
