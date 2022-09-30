import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Activities.css'

const Activities = () => {
const [activities, setActivities]=useState([]);
useEffect(()=>{ 
    fetch('activity.json')
    .then(res=>res.json())
    .then(data=>setActivities(data))
},[])
const handleAddActivity=(activity)=>{
    const newActivities=[...Details,activity]
    console.log(newActivities)
    setActivities(newActivities);
}

    return (
        <div className='activities'>
            {
               activities.map(activity=><Details activity={activity} key={activity.id} handleAddActivity={handleAddActivity} ></Details>)
            }
        </div>
    );
};

export default Activities;