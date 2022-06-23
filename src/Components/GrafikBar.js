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
    { date1: new Date("2020-07-01") },
    { date2: new Date("2020-07-02") },
    { date3: new Date("2020-07-03") },
    { date4: new Date("2020-07-04") },
  ];
  console.log(maDate);
  // console.log(activity.sessions.kilogram);

  // const newDate = maDate.toLocaleDateString("fr");
  // console.log(newDate);

  return (
    <div className="bar">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={activity.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={false}
            stroke="#DEDEDE"

            // tickFormatter={}
          />
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
            // onMouseOver={{ fontFamily: "Roboto", fontSize: "7px" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafikBar;
