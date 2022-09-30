import React from 'react';
import './Profile.css'
import dp from '../../images/profile.png'

const Profile = () => {
    return (
        <div className='profile'>
                <img src={dp} alt="" />
            <div className='personal-info'>
                <h4>Shakaut Kader</h4>
                <p>Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default Profile;