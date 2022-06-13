import { useState, useEffect } from "react";

const useApi = (url) => {
  const [data, setData] = useState({});

  const getData = () => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        console.log("JSON:", myJson);
        console.log("JSON", data);
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return data;
};
export default useApi;
