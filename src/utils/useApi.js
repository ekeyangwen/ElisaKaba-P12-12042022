import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        console.log("JSON:", myJson);
        setData(myJson);
        console.log(url);
      });
  }, [url]);

  return data;
};
export default useApi;