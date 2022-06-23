import React from "react";
import { createContext, useState } from "react";

export default React.createContext({
  src: "",
  updateSrc: (name) => {},
});

//  const toggleSrc = () => {
//     setSrcContext(srcContext === "mock" ? "API" : "mock");
//   };
// console.log(srcContext);
// const [srcContext, setSrcContext] = useState("mock");

// export function SrcContext({ children }) {
//   return (
//     <div>
//       <SetSrcToggler.Provider value={{ etat: "mock" }}></SetSrcToggler.Provider>
//     </div>
//   );
// }

// export default SetSrcToggler;
