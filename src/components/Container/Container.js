import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
          <div className="activity-container">
            <Header/>
            <Activities/>
          </div>
          <div className="information-container">
            <Profile></Profile>
          </div>
        </div>
    );
};

export default Container;