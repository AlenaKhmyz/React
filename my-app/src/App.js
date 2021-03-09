import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ConditionalRendering from './components/hw3'
import DoubleSidedBinding from './components/hw4'


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <button> <Link to="/">ConditionalRendering</Link> </button>
            </li>
            <li>
              <button> <Link to="/Ex2">DoubleSidedBinding</Link> </button>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/hw3">
            <Task3 />
          </Route>

          <Route path="/hw4">
            <Task4 />
          </Route>
            
        </Switch>
      </div>
    </Router>
  );
}

function Task3() {
  return (
    <div className = 'content'>
    </div>
  );
}

function Task4() {
  return (
    <div className = 'content'>
    </div>
  );
}
