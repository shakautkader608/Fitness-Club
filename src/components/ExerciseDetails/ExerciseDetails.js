import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    console.log(props);
    return (
        <div className='exerciseDetails'>
        <p>Exercise Details</p>
        <div className='exercise-time'>
            <div className='total-time'>
                <p>Exercise Time</p>
                <span>200 seconds</span>
            </div>
            <div className='total-time'>
                <p>Break Time</p>
                <span>200 seconds</span>
            </div>
        </div>
    </div>
    );
};

export default ExerciseDetails;