import React from "react";
import { PieChart, Pie } from "recharts";

const GrafikPie = ({ score, data }) => {
  return (
    <div className="pie">
      <PieChart width={159} height={159}>
        <Pie
          dataKey={score}
          startAngle={180}
          endAngle={0}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default GrafikPie;
