import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const GrafikLine = ({ average }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={average.sessions}>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="day" axisLine={false} />
        <YAxis dataKey="sessionLength" hide={true} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFF"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrafikLine;
