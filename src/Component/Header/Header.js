import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-content'>
            <div className='header'>
                <img src={logo} alt="" />
                <h1>Cricket Stars</h1>
            </div>
            <div className="nav-container">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/stars">More</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;