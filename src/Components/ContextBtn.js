import React, { useContext } from "react";
import { FetchContext } from "../utils/context/SrcContext";

const ContextBtn = () => {
  const { toggleFetch, fetch } = useContext(FetchContext);

  return (
    <button
      className="toggleBtn"
      onClick={() => {
        toggleFetch();
      }}
    >
      dataFrom: {fetch === "API" ? "API" : "MOCK"}
    </button>
  );
};

export default ContextBtn;
