import React from "react";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const GrafikRadar = ({ performance, kind }) => {
  console.log(kind);
  return (
    <div>
      <RadarChart outerRadius={90} width={730} height={250} data={kind}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
      </RadarChart>
    </div>
  );
};

export default GrafikRadar;
