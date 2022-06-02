import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const Ligne = ({ performance }) => {
  return (
    <div>
      <LineChart width={500} height={700} data={performance}>
        <CartesianGrid />
        <XAxis dataKey="kind" />
        <YAxis yAxisId="left-axis" />
        <YAxis yAxisId="right-axis" orientation="right" />
        <Line
          yAxisId="left-axis"
          type="monotone"
          dataKey="value"
          stroke="green"
        />
      </LineChart>
    </div>
  );
};

export default Ligne;
