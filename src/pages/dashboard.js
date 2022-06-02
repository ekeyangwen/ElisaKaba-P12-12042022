import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Ligne from "../Components/Ligne";

const Dashboard = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [performance, setPerformance] = useState("");

  useEffect(() => {
    fetch("../../../dataInfoUsers.json")
      .then((response) => response.json())
      .then((myJson) => {
        let userFind = myJson.find((user) => user.id === id);
        setUser(userFind);
      });
    fetch("../../../dataPerformanceUsers.json")
      .then((response) => response.json())
      .then((myJson) => {
        let performanceFind = myJson.find(
          (performance) => performance.userId === id
        );
        setPerformance(performanceFind);
        console.log(performanceFind);
      });
  }, []);

  if (user === undefined) {
    return <Navigate to="*" />;
  }

  // return performance.data.map((data) => {
  return (
    <div>
      <Ligne performance={performance.data} />
    </div>
  );
  // });
};
export default Dashboard;
