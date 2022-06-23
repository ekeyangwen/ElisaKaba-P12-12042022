import React from "react";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const GrafikRadar = ({ performance }) => {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={performance.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey={performance.kind} />
          <Radar
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrafikRadar;
