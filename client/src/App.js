
import React, {useEffect} from 'react';
import { getCategories } from "./redux/category/categoriesActions";
import {useDispatch} from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";
import FormProduct from "./components/Forms/CreateProduct.jsx";
import FormCategory from "./components/Forms/CreateCategory";
import FormBrand from "./components/Forms/CreateBrand";
import Catalogue from "./components/Catalogue/Catalogue.jsx";

import FormRegister from './components/Register/FormRegister.jsx';
import FormLogin from './components/Login/FormLogin.jsx';
import postProduct from './components/Forms/postProduct'
import updateProduct from './components/Forms/updateProduct'
import updateCategory from './components/Forms/updateCategory'
import updateBrand from './components/Forms/updateBrand'

function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />

              <Route exact path="/catalogue" component={Catalogue} />

              <Route exact path ="/login" component={FormLogin} />
              <Route exact path = "/register" component={FormRegister}/>

              <Route exact path="/catalogue/:id" component={ProductDetail} />
              <Route exact path="/admin/createProduct" component={FormProduct} />
              <Route exact path="/admin/createProduct2" component={postProduct} />
              <Route exact path="/admin/product/:id/update" component={updateProduct} />
              <Route exact path="/admin/createCategory" component={FormCategory} />
              <Route exact path="/admin/category/:id/update" component={updateCategory} />
              <Route exact path="/admin/createBrand" component={FormBrand} />
              <Route exact path="/admin/brand/:id/update" component={updateBrand} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
