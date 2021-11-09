
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";
import FormCategory from "./components/Forms/CreateCategory";
import FormBrand from "./components/Forms/CreateBrand";
import Catalogue from "./components/Catalogue/Catalogue.jsx";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import FormRegister from './components/Register/FormRegister.jsx';
import FormLogin from './components/Login/FormLogin.jsx';

import updateCategory from './components/Forms/updateCategory'
import updateBrand from './components/Forms/updateBrand'
import Appointment from './components/Admin/appointment/Appointment';
import Products from './components/Admin/products/Products';
import Users from './components/Admin/Users';

import Orders from './components/Admin/orders/Orders';
import Newsletter from './components/Admin/newsletter/Newsletter';
import OnSale from './components/Admin/onsale/OnSale';
import Nav from "./components/Admin/navbar/Nav"
import Dashboard from './components/Admin/dashboard/Dashboard';
import Profile from './components/Profile/profile'

import Pay from './components/Checkout/Pay';
import FormForgot from './components/ForgotPassword/FormForgot.jsx';



function App() {

  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/catalogue" component={Catalogue} />

          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/recovery" component={FormForgot} />
          <Route exact path= "/pay" component={Pay} /> 
          <Route exact path="/catalogue/:id" component={ProductDetail} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/catalogue/:id/reviews" component={ProductDetail} />


          <Route exact path="/admin/createCategory" component={FormCategory} />
          <Route exact path="/admin/category/:id/update" component={updateCategory} />
          <Route exact path="/admin/createBrand" component={FormBrand} />
          <Route exact path="/admin/brand/:id/update" component={updateBrand} />
        </Switch>
        <Switch>
          <div className='container'>
            <Route path="/admin" component={Nav} />

            <div className='dashboard'>
              <Route path="/admin/home" component={Dashboard} />
              <Route path="/admin/onSale" component={OnSale} />
              <Route path="/admin/products" component={Products} />
              <Route path="/admin/users" component={Users} />
              <Route path="/admin/newsletter" component={Newsletter} />
              <Route path="/admin/appointment" component={Appointment} />
              <Route path="/admin/orders" component={Orders} />
            </div>

          </div>

        </Switch>


      </Router>


    </div>
  );
}

export default App;


// <Route exact path="/admin/createProduct" component={FormProduct} />
// <Route exact path="/admin/createProduct2" component={postProduct} />