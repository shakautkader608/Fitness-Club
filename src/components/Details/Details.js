import React from "react";
import "./Details.css";

const Details = (props) => {
  const { activity, time, age, img, description } = props.activity;

  const { handleExerciseTime } = props;
  return (
    <div>
      <div className="details">
        <img src={img} alt="" />
        <h4>{activity}</h4>
        <p>{description}</p>
        <h5>For Age: {age}</h5>
        <h5>Time Required: {time} min</h5>
        <button type="button" className="btn-add" onClick={() => handleExerciseTime(time)}>
          Add To List
        </button>
      </div>
    </div>
  );
};

export default Details;
