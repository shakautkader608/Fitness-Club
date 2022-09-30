import React from "react";
import "./PhysicalDetails.css";

const PhysicalDetails = () => {
  return (
    <div className="physical-details">
      <div className="common">
        <h2>
          90<small>kg</small>
        </h2>
        <p>Weight</p>
      </div>

      <div className="common">
        <h2>5.5</h2>
        <p>Height</p>
      </div>

      <div className="common">
        <h2>
          32<small>yrs</small>
        </h2>
        <p>Age</p>
      </div>
    </div>
  );
};

export default PhysicalDetails;
