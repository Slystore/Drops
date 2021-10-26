import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
