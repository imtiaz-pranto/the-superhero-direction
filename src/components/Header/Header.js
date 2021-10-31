import React from 'react';
import './Header.css';
import logo from '../images/SkillHub-Logo-Grey-Text.png';

const Header = () => {
    return (
        <div>
        <div className="header-conatiner">
            <div>
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/trending-courses">Trending</a>
                <a href="/contact-us">Contact</a>
            </div>
            <div className="search-conatiner">
                <input className="input-design" type="text" placeholder="Search Here" />
                <button className="btn-design" >Search</button>
            </div>
        </div>
        <div>
            <h1>Total Courses: 09</h1>
        </div>
        </div>
    );
};


export default Header;