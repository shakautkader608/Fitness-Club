import React from "react";
import { Toaster } from "react-hot-toast";
import "./ExerciseDetails.css";

const ExerciseDetails = ({ exerciseTime, breakTime }) => {
  console.log(exerciseTime);
  return (
    <div className="exerciseDetails">
      <p>Exercise Details</p>
      <div className="exercise-time">
        <div className="total-time">
          <p>Exercise Time</p>
          <span>{exerciseTime} min</span>
        </div>
        <div className="total-time">
          <p>Break Time</p>
          <span>{breakTime} min</span>
        </div>
      </div>
      <button className="btn-complete">Activity Completed</button>
    </div>
  );
};

export default ExerciseDetails;
