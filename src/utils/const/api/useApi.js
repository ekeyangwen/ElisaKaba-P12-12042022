import { useState, useEffect } from "react";

const useApi = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        console.log(data);
      });
  }, [url]);

  return data;
};
export default useApi;
