import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
          <div className="activity-container">
            <Header/>
            <Activities/>
          </div>
          <div className="information-container">
            <h1>Information</h1>
          </div>
        </div>
    );
};

export default Container;