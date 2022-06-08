import React from "react";
import { PieChart, Pie } from "recharts";
import { Value } from "sass";

const GrafikPie = ({ data }) => {
  return (
    <div className="pie">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey={Value}
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
