import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import "./Activities.css";

const Activities = ({ handleExerciseTime }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="activities">
      {activities.map((activity) => (
        <Details activity={activity} key={activity.id} handleExerciseTime={handleExerciseTime}></Details>
      ))}
    </div>
  );
};

export default Activities;
