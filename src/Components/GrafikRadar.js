import React from "react";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const GrafikRadar = ({ performance }) => {
  const data = [
    { id: 1, kind: "cardio" },
    { id: 2, kind: "energy" },
    { id: 3, kind: "endurance" },
    { id: 4, kind: "strenght" },
    { id: 5, kind: "speed" },
    { id: 6, kind: "intensity" },
  ];

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
          <PolarAngleAxis data={data} dataKey={data.kind} />
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
