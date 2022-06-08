import React from "react";
import { PieChart, Pie } from "recharts";

const GrafikPie = ({ data, score }) => {
  return (
    <div className="pie">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey={score}
          nameKey="todayScore"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="blue"
          label
        />
        <Pie />
      </PieChart>
    </div>
  );
};

export default GrafikPie;
