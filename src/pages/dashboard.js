import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("../../../data.json")
      .then((response) => response.json())
      .then((myJson) => {
        let userFind = myJson.find((user) => user.id === id);
        setUser(userFind);
      });
  }, []);
  console.log(user);
  if (user === undefined) {
    return <Navigate to="*" />;
  }

  return <div>Bonjour {user.userInfos.firstName}</div>;
};

export default Dashboard;
