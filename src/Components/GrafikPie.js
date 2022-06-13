import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const GrafikPie = ({ score }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          startAngle={180}
          endAngle={0}
          data={score}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="black"
          label
          dataKey="todayScore"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GrafikPie;
