import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConvertData } from "./mapper/ConvertData";

/**
 *
 * @param {string} url
 * @returns the fetch of the data ad the potential error
 */

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((result) => {
        setData(ConvertData(url, result));
      })
      .catch((erreur) => {
        navigate("*");
      });
  }, [url, navigate]);

  return data;
};
