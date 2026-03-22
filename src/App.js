import './App.css';
import Home from './pages/Home.js';
import Footer from './pages/Footer.jsx';
import Header from './pages/Header.jsx';
import Services from './pages/Services.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
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