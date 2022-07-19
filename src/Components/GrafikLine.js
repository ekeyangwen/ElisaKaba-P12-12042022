import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";

/**
 *
 *
 * @returns Linechart Grafik
 */
const GrafikLine = ({ average }) => {
  /**
   *
   * @param {number} tick is the number of the dayweek
   * @returns the first letter of the day
   */
  function customDayFormatter(tick) {
    if (tick === 1) {
      return "L";
    }
    if (tick === 2) {
      return "M";
    }
    if (tick === 3) {
      return "M";
    }
    if (tick === 4) {
      return "J";
    }
    if (tick === 5) {
      return "V";
    }
    if (tick === 6) {
      return "S";
    }
    if (tick === 7) {
      return "D";
    }
  }

  /**
   *
   * @param {boolean} active
   * @param {array} payload
   * @returns a customTootltip wich return the number of minutes for sessions in the grafik
   */

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="toolTips">
          <p className="payload">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  };

  return (
    <div className="line">
      <p className="sessionLength">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={average.sessions}>
          <XAxis
            dataKey="day"
            tickFormatter={customDayFormatter}
            fontFamily="Roboto"
            axisLine={false}
            stroke="white"
            opacity={0.5}
            fontSize={12}
            tickLine={false}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip content={<CustomToolTip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
GrafikLine.propTypes = {
  average: PropTypes.object,
};
export default GrafikLine;
