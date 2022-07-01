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
  function customDayFormatter(tick) {
    if (tick === 1) {
      return "L";
    }
  }

  const CustomTootlTip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="toolTips">
          <p>{`${payload[0].value}min`}</p>
        </div>
      );
    }
  };

  return (
    <div className="line">
      <p className="sessionLength">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={average.sessions}>
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={customDayFormatter}
            axisLine={false}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip content={<CustomTootlTip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafikLine;
