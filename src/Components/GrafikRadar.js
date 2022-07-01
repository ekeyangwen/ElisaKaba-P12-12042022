import React from "react";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { kind: "cardio" },
  { kind: "energy" },
  { kind: "endurance" },
  { kind: "strenght" },
  { kind: "speed" },
  { kind: "intensity" },
];
function customKindFormatter(tick) {
  if (tick === 1) {
    return "cardio";
  }
  if (tick === 2) {
    return "energy";
  }

  // for (let k = 0; k < data.length; k++) {
  //   return data[k].kind;
  // }
}
const GrafikRadar = ({ performance }) => {
  console.log(data.length);

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
          <PolarAngleAxis
            data={performance.data.kind}
            dataKey=""
            tickFormatter={customKindFormatter}
            stroke="#FFFF"
          />
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
