import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/product/:id" component={ProductDetail} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
