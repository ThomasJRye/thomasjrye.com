import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className='header-container'>
        <div className='header'>
            <div className='name-container'>
                <NavLink to="/" className="name">Oslo AI Agents</NavLink>
            </div>
            <div className='navbar-container'>
                <NavLink to="/" className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")}>Home</NavLink>
                <NavLink to="/services" className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")}>Services</NavLink>
                <NavLink to="/about" className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => "navbar-item" + (isActive ? " active" : "")}>Contact</NavLink>
            </div>
        </div>
    </div>
);

export default Header;
