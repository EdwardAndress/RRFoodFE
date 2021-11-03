import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Welcome to RR Food
              </p>
              <Link to='/menu' className="App-link">
                Enter
              </Link>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
