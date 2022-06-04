import React from "react";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

const GrafikLine = () => {
  return (
    <div className="line">
      <LineChart data={performance}>
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

export default GrafikLine;
