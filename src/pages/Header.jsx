import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className='Header'>
      <nav>
        <ul className='header-menu'>
          <b className='title-name'>Thomas J. Rye</b>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <a href="https://thomasjrye.substack.com/">Articles</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

  export default Header;