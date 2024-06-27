import './App.css';
import Home from './pages/Home.js';
import Footer from './pages/Footer.jsx';
import Resume from './pages/Resume.jsx';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div className='App' onLoad="disableScroll()">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      {location.pathname !== '/resume' && <Footer />}
    </div>
  );
}

const Header = () => (
  <div className='Header'>
    <nav>
      <ul>
        <div className='menu'>
          <b>Thomas J. Rye</b>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <a href="https://thomasjrye.substack.com/">Articles</a>
          </li>
        </div>
      </ul>
    </nav>
  </div>
);

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}