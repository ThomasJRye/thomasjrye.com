import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Footer from './pages/Footer.js'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { disableBodyScroll } from 'body-scroll-lock';


class App extends React.Component {


  render() {
    return (
      
      <Router >
        <div className='App' onload="disableScroll()">
          
          <Header/>
          <Home/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

function Header() {
  return (
    <div className='Header'>
      
      <nav>
      
          <ul>
              <div className='menu'>
                <b>Thomas J. Rye</b>
                <li>
                  <a href="https://thomasjrye.substack.com/">Articles</a>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
            </div>
          </ul>
        </nav>
    </div>
  );
}


export default App;
