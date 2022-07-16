import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ConvertData } from "./mapper/ConvertData";

export const useApi = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
        setData(ConvertData(url, result));
      });
    // .then(function (myJson) {
    //   setData(myJson);
    // });
  }, [url]);

  // if (data === null) {
  //   console.log("UNDEFINED");
  //   return <Navigate to="*" />;
  // }
  console.log(data);
  return data;
};
