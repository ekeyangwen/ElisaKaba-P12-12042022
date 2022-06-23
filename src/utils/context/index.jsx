import { createContext, useState } from "react";
const setSrctoggler = createContext();

export const SrcProvider = ({ children }) => {
  const [src, setSrc] = useState("mock");

  const toggleSrc = () => {
    setSrc(src === "mock" ? "API" : "mock");
  };

  return (
    <setSrctoggler.Provider value={{ src, toggleSrc }}>
      {children}
    </setSrctoggler.Provider>
  );
};
