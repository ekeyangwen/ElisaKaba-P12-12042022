import React, { createContext, useState } from "react";

export const FetchContext = createContext();
export const FetchProvider = ({ children }) => {
  const [fetch, setFetch] = useState("API");
  const toggleFetch = () => {
    setFetch(fetch === "API" ? "MOCK" : "API");
  };
  return (
    <FetchContext.Provider value={{ fetch, toggleFetch }}>
      {children}
    </FetchContext.Provider>
  );
};
