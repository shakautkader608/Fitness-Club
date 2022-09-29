import React from 'react';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
          <div className="activity-container">
            <h1>Activity</h1>
          </div>
          <div className="information-container">
            <h1>Information</h1>
          </div>
        </div>
    );
};

export default Container;