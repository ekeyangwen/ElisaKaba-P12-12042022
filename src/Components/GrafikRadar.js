import React from "react";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function customTickFormatter(tick) {
  if (tick === 1) {
    return "Intensité";
  }
  if (tick === 2) {
    return "Vitesse";
  }
  if (tick === 3) {
    return "Force";
  }
  if (tick === 4) {
    return "Endurance";
  }
  if (tick === 5) {
    return "Energie";
  }
  if (tick === 6) {
    return "Cardio";
  }
}
const GrafikRadar = ({ performance }) => {
  return (
    <div className="radar">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart data={performance.data} stroke="none">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={customTickFormatter}
            stroke="#FFF"
            fontFamily="Roboto"
            fontSize={10}
          />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafikRadar;
