import logo from './logo.svg';
import './App.css';
import articles from './pages/Articles.js';
import home from './Home.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articles/Consensous" component={articles(0)}/>
          <Route path="/articles" component={articles}/>
          <Route path="/" component={home}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}







function Header() {
  return (
    <div className='Header'>
      
      <nav>
        
          <ul>
              <div className='menu'>
                <b>Thomas J. Rye</b>
                
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
            </div>
          </ul>
        </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className='Footer'>
      <div class="column" id="first">
        <a href= "https://www.linkedin.com/in/thomas-rye-b08064121/" class="fa fa-linkedin"></a>
        <a href= "https://www.instagram.com/jacobsenrye/" class="fa fa-instagram"></a>
        <a href= "https://twitter.com/JacobsenRye" class="fa fa-twitter"></a>
        <a href= "https://thomasjrye.medium.com/" class="fa fa-medium"></a>
        <a href= "mailto: thomasjrye@gmail.com" class="fa fa-envelope"></a>
      </div>
      
      <div className='Mail'>
        
      </div>
      
    </footer>
  );
}
export default App;
