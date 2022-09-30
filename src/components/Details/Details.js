import React from 'react';
import './Details.css'

const Details = (props) => {
    const{activity,time,age,img,description}=props.activity;
    const {handleAddActivity}=props
    return (
        <div>
            <div className='details'>
                <img src={img} alt="" />
                <h4>{activity}</h4>
                <p>{description}</p>
                <h5>For Age: {age}</h5>
                <h5>Time Required: {time} min</h5>
            <button className='btn-add' onClick={()=>handleAddActivity(props.activity)} >Add To List</button>
            </div>
        </div>
    );
};

export default Details;