import React from "react";
import "./Break.css";

const Break = ({ handleBreakTime }) => {
  return (
    <div className="break">
      <p>Add A Break</p>
      <div className="break-details">
        <button className="btn-second" onClick={() => handleBreakTime(10)}>
          10s
        </button>
        <button className="btn-second" onClick={() => handleBreakTime(20)}>
          20s
        </button>
        <button className="btn-second" onClick={() => handleBreakTime(30)}>
          30s
        </button>
        <button className="btn-second" onClick={() => handleBreakTime(40)}>
          40s
        </button>
      </div>
    </div>
  );
};

export default Break;
