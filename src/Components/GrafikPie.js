import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 *
 *
 * @returns PieCharts Grafik
 */

const GrafikPie = ({ score, todayScore }) => {
  let pieData = [];

  let defineScore = score ? score : todayScore;

  pieData = [
    {
      value: defineScore,
    },
    {
      value: 1 - defineScore,
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
        <div className="scorePercent"> {defineScore * 100} %</div>
        <span className="objectif">de votre objectif</span>
      </div>
    </div>
  );
};

GrafikPie.propTypes = {
  score: PropTypes.number,
  todayScore: PropTypes.number,
};

export default GrafikPie;
