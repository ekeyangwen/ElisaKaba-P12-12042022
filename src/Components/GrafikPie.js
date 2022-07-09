import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const GrafikPie = ({ score }) => {
  let pieData = [
    {
      value: score.todayScore,
    },
    {
      value: 1 - score.todayScore,
    },
  ];

  return (
    <div className="pie">
      <ResponsiveContainer className="pieContainer" width="100%" height="100%">
        <PieChart width={400} height={400}>
          <circle fill="#FFFF" cy="50%" cx="50%" r="70" />

          <Pie
            data={pieData}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            fill="#ff000"
            stroke="none"
            cornerRadius={40}
          >
            <Cell fill="red" />
            <Cell fill="transparent" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="objectifScore">
        <div className="scorePercent"> {score.todayScore * 100} %</div>

        <span className="objectif">de votre objectif</span>
      </div>
    </div>
  );
};

export default GrafikPie;
