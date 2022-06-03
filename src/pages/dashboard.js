import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import GrafikRadar from "../Components/GrafikRadar";
import HorizontalInfos from "../Components/HorizontalInfos";

const Dashboard = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [performance, setPerformance] = useState("");
  const [kind, setKind] = useState("");

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
        // setKind(
        //   performance.kind.find(
        //     (kind) => `value ${kind} = ${performance.kind[kind]}`
        //   )
        // );
      });
  }, []);

  if (user === undefined) {
    return <Navigate to="*" />;
  }
  let usersInfos = user.userInfos;

  return (
    <div>
      <h1 className="bonjour">Bonjour {user && usersInfos.firstName} </h1>
      <GrafikRadar performance={performance} kind={kind} id={id} />
      <HorizontalInfos user={user} />
    </div>
  );
};
export default Dashboard;
