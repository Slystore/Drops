
import React, {useEffect} from 'react';
import { getCategories } from "./redux/category/categoriesActions";
import { getProducts } from './redux/products/productsAction';

import {useDispatch, useSelector} from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView.js";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";
// import FormProductCreate from "./components/Forms/CreateProduct.jsx";
import FormCategory from "./components/Forms/CreateCategory";
import FormBrand from "./components/Forms/CreateBrand";
import Catalogue from "./components/Catalogue/Catalogue.jsx";

import FormRegister from './components/Register/FormRegister.jsx';
import FormLogin from './components/Login/FormLogin.jsx';
import FormProductCreate from './components/Forms/postProduct'
import FormProductUpdate from './components/Forms/updateProduct'
import updateCategory from './components/Forms/updateCategory'
import updateBrand from './components/Forms/updateBrand'
import Admin from './views/admin';
import Appointment from './components/Admin/Appointment';
import Products from './components/Admin/Products';
import Users from './components/Admin/Users';
import Orders from './components/Admin/Orders';
import Newsletter from './components/Admin/Newsletter';
import OnSale from './components/Admin/OnSale';


function App() {

  const dispatch = useDispatch()
    
  useEffect(()=>{
      dispatch(getProducts())
  },[dispatch])
  
  const productos = useSelector( state => state.productReducer.products);

  return (
    <div className="App">

        <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />

              <Route exact path="/catalogue" component={Catalogue} />

              <Route exact path ="/login" component={FormLogin} />
              <Route exact path = "/register" component={FormRegister}/>

              <Route exact path="/catalogue/:id" component={ProductDetail} />
        
              <Route path="/admin" component={Admin} />

              <Route exact path="/admin/createCategory" component={FormCategory} />
              <Route exact path="/admin/category/:id/update" component={updateCategory} />
              <Route exact path="/admin/createBrand" component={FormBrand} />
              <Route exact path="/admin/brand/:id/update" component={updateBrand} />
            </Switch>
            
            <Route exact path="/admin/products" > <Products/> </Route>
            <Route exact path="/admin/users" > <Users/> </Route>
            <Route exact path="/admin/orders" > <Orders /> </Route>
            <Route exact path="/admin/newsletter" > <Newsletter/> </Route>
            <Route exact path="/admin/appointment" > <Appointment/> </Route>
            <Route exact path="/admin/onsale" > <OnSale/> </Route>
            <Route exact path="/admin/createProduct2" > <FormProductCreate/> </Route>
            <Route exact path="/admin/product/:id/update" >  <FormProductUpdate product={ (product) => productos.filter(el => el.id !== product.id)}/> </Route>

        </Router>
    </div>
  );
}

export default App;


// <Route exact path="/admin/createProduct" component={FormProduct} />
// <Route exact path="/admin/createProduct2" component={postProduct} />