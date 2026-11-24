import './App.css';
import Home from './pages/Home.js';
import CV from './pages/CV.js';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";

const TITLES = {
  '/': 'Thomas J. Rye',
  '/cv': 'CV · Thomas J. Rye',
};

const App = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (window.location.host === 'thomasjrye.com') {
      window.location.replace('https://www.thomasjrye.com' + window.location.pathname);
    }
  }, []);

  // New page: start at the top (unless jumping to a section) and set the tab title.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    document.title = TITLES[pathname] || TITLES['/'];
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/resume" element={<Navigate to="/cv" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
