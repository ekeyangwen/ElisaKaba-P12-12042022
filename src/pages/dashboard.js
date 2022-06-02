import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { info } from "sass";

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
        console.log(performance);
      });
  }, []);

  console.log(user);
  if (user === undefined) {
    return <Navigate to="*" />;
  }

  const infoPerformance = performance.kind;
  const infoUser = user.userInfos;

  console.log(infoPerformance);
  return (
    <div>
      Bonjour {user && infoUser} {user && infoPerformance}
    </div>
  );
};

export default Dashboard;
