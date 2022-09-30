import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import PhysicalDetails from "../PhysicalDetails/PhysicalDetails";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./Container.css";
import Break from "../Break/Break";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import Questions from "../Questions/Questions";

const Container = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const handleExerciseTime = (time) => {
    // setExerciseTime((exerciseTime) => exerciseTime + time);
    setExerciseTime(exerciseTime + time);
  };


  const handleBreakTime = (time) => {
    setBreakTime(time);
  };

  return (
    <div className="container">
      <div className="activity-container">
        <Header />
        <Activities handleExerciseTime={handleExerciseTime} />
      </div>
      <div className="information-container">
        <Profile></Profile>
        <PhysicalDetails></PhysicalDetails>
        <Break handleBreakTime={handleBreakTime}></Break>
        <ExerciseDetails exerciseTime={exerciseTime} breakTime={breakTime} />
      </div>
      <Questions></Questions>
    </div>
  );
};

export default Container;
