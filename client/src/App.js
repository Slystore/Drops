
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue.jsx";
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import FormRegister from './components/Register/FormRegister.jsx';
import FormLogin from './components/Login/FormLogin.jsx';
import Appointment from './components/Admin/appointment/Appointment';
import Products from './components/Admin/products/Products';
import ReviewForm from './components/Forms/createReview';
import Users from './components/Admin/users/Users';
import Orders from './components/Admin/orders/Orders';
import Newsletter from './components/Admin/newsletter/Newsletter';
import OnSale from './components/Admin/onsale/OnSale';
import Nav from "./components/Admin/navbar/Nav"
import Dashboard from './components/Admin/dashboard/Dashboard';
import Profile from './components/Profile/profile'
import OrderDetail from './components/Admin/orders/OrdersDetails/OrderDetail.jsx';

import Categories from './components/Admin/categories/Categories'
import Brands from './components/Admin/brands/Brands'
import Pay from './components/Checkout/Pay';
import ShipmentForm from './components/Checkout/ShipmentForm.jsx';
import FormForgot from './components/ForgotPassword/FormForgot.jsx';

import Adidas from './views/brands/adidas'
import Balenciaga from './views/brands/balenciaga'
import Gucci from './views/brands/gucci'
import Jordan from './views/brands/jordan'
import Nike from './views/brands/nike'
import OffWhite from './views/brands/offWhite'
import Puma from './views/brands/puma'
import Reebok from './views/brands/reebok'
import UnderArmour from './views/brands/underArmour'
import Vans from './views/brands/vans'

import Deportivo from './views/categories/deportivo'
import Sandalias from './views/categories/sandalias'
import Urbano from './views/categories/urbano'



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />

          <Route exact path="/products/bybrand/adidas" component={Adidas} />
          <Route exact path="/products/bybrand/balenciaga" component={Balenciaga} />
          <Route exact path="/products/bybrand/gucci" component={Gucci} />
          <Route exact path="/products/bybrand/jordan" component={Jordan} />
          <Route exact path="/products/bybrand/nike" component={Nike} />
          <Route exact path="/products/bybrand/offwhite" component={OffWhite} />
          <Route exact path="/products/bybrand/puma" component={Puma} />
          <Route exact path="/products/bybrand/reebok" component={Reebok} />
          <Route exact path="/products/bybrand/underarmour" component={UnderArmour} />
          <Route exact path="/products/bybrand/vans" component={Vans} />

          <Route exact path="/products/bycategories/deportivo" component={Deportivo} />
          <Route exact path="/products/bycategories/sandalias" component={Sandalias} />
          <Route exact path="/products/bycategories/urbano" component={Urbano} />


          <Route exact path="/profile" component={Profile} />
          <Route exact path="/catalogue" component={Catalogue} />

          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/recovery" component={FormForgot} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/shipment" component={ShipmentForm} />
          <Route exact path="/catalogue/:id" component={ProductDetail} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/catalogue/:id/reviews" component={ProductDetail} />
          <Route exact path="/user/:userId/review/:productId/" render={({ match }) => <ReviewForm />} />
          <Route exact path="/user/:userId/shipmentForm/" component={ShipmentForm} />


        </Switch>
        <Switch>
          <div className='cuadro'>
            <Route path="/admin" component={Nav} />

            <div className='dashboard'>
              <Route path="/admin/home" component={Dashboard} />
              <Route path="/admin/onSale" component={OnSale} />
              <Route path="/admin/products" component={Products} />
              <Route path="/admin/categories" component={Categories} />
              <Route path="/admin/brands" component={Brands} />
              <Route path="/admin/users" component={Users} />
              <Route path="/admin/newsletter" component={Newsletter} />
              <Route path="/admin/appointment" component={Appointment} />
              <Route path="/admin/orders" component={Orders} />
              <Route path="/admin/detail/:id" component={OrderDetail} />
            </div>

          </div>

        </Switch>


      </Router>


    </div>
  )
}

export default App;


// <Route exact path="/admin/createProduct" component={FormProduct} />
// <Route exact path="/admin/createProduct2" component={postProduct} />