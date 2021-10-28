import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import './App.css';
import FormProduct from './components/Forms/FormProduct.jsx';
import FormRegister from './components/Register/FormRegister.jsx';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path = "/register" component={FormRegister}/>
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/admin/createProduct" component={FormProduct} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
