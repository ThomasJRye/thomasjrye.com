import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className='Header'>
      <nav>
        <ul className='header-menu'>
          <b className='title-name'>Oslo AI Agents</b>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );

  export default Header;