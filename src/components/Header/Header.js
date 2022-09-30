import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
            <img src={logo} alt="" />
            <h1 className='logo-Text'>Fitness Club</h1>
            </div>
            <p>Select today’s exercise</p>
        </div>
    );
};

export default Header;