import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className='Header'>
      <nav>
        <ul className='header-menu'>
          <b className='title-name'>Thomas J. Rye</b>
          <li>
            <a href="https://thomasjrye.substack.com/">Artikler</a>
          </li>
          <li>
            <Link to="/">Hjem</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

  export default Header;
