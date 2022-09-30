import React from 'react';
import './Details.css'

const Details = (props) => {
    const{activity,time,age,img,description}=props.activity
    return (
        <div>
            <div className='details'>
            <img src={img} alt="" />
            <h4>{activity}</h4>
            <p>{description}</p>
            <h5>For Age: {age}</h5>
            <h5>Time Required: {time} min</h5>
        </div>
        </div>
    );
};

export default Details;