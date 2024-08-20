import './App.css';
import Home from './pages/Home.js';
import Footer from './pages/Footer.jsx';
import Resume from './pages/Resume.jsx';
import Header from './pages/Header.jsx';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

//update
const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.location.host === 'thomasjrye.com') {
      window.location.replace('https://www.thomasjrye.com');
    }
  }, []);
  
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      {location.pathname !== '/resume' && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}