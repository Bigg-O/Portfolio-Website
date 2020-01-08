import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Homebar from './Components/Homebar'
import Main from './Components/Main'

function App() {
  return (
    <Router>
      <div className="App">
        <Homebar />
        <Route exact path="/">
          <Main />
        </Route>
      </div>
    </Router>
  );
}

export default App;