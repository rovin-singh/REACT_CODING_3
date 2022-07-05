import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Theme = () => {
  const { toggle } = useContext(AppContext);
  return (
    <div style={{ display: "block" }}>
      <h1>Click Here To Change Theme</h1>
      <div>
        <button
          style={{ background: "yellow", padding: "5px", fontSize: "bold" }}
          onClick={() => toggle()}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Theme;
