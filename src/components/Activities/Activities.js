import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
const [activities, setActivities]=useState([]);
useEffect(()=>{ 
    fetch('activity.json')
    .then(res=>res.json())
    .then(data=>setActivities(data))
},[])

    return (
        <div className='activities'>
            {
               activities && activities.map(activity=>console.log(activity))
            }
        </div>
    );
};

export default Activities;