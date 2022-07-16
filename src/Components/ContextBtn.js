import React, { useContext } from "react";
import { FetchContext } from "../utils/context/SrcContext";

/**
 *²
 * @returns {button} toggle button to choose between mocked data and API
 */
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
