import React from 'react';
import Homebar from './Components/Homebar'
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import About from './Components/About'
import './App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <Jumbotron fluid className="mainJumbo">
      <Router>
        <Homebar />
        <Route exact path="/About" component={About} />
        <Route exact path="/Software_Portfolio" />
        <Route exact path="/Robotics_Portfolio" />
        <Route exact path="/Software_Resume" />
        <Route exact path="/Routesetting_Resume" />
        <Route exact path="/Climbing_Resume" />
        <Route exact path="/Contact" />
      </Router>
    </Jumbotron>
  );
}

export default App;