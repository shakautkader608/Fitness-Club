import React from 'react';
import Activities from '../Activities/Activities';
import PhysicalDetails from '../PhysicalDetails/PhysicalDetails';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Container.css'
import Break from '../Break/Break';

const Container = () => {
    return (
        <div className='container'>
          <div className="activity-container">
            <Header/>
            <Activities/>
          </div>
          <div className="information-container">
            <Profile></Profile>
            <PhysicalDetails></PhysicalDetails>
            <Break></Break>
          </div>
        </div>
    );
};

export default Container;