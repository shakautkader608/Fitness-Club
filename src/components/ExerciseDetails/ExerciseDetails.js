import React from 'react';
import { Toaster } from 'react-hot-toast';
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
        <button className='btn-complete'>Activity Completed</button>
    </div>
    );
};

export default ExerciseDetails;