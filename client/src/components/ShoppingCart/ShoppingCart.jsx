import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillCartStorage } from "../../redux/cart/cartActions";
import { cartResetTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { clearCart } from '../../redux/cart/cartActions';
import {  recoveryCart } from '../../redux/cart/cartActions';
import Divider from '@mui/material/Divider';
import CartItem from "./CartItem";
import logo from '../../assets/Logo.png';
import Checkout from '../Checkout/Checkout';
import axios from 'axios'

import './ShoppingCart.css'

var total = 0

function ShopingCart() {
    const dispatch = useDispatch();
    const { cartFill } = useSelector((state) => state.cartReducer);
    const [ cartStorage ] = useState(JSON.parse(window.localStorage.getItem("cartId")))
    const history = useHistory()
    let user = JSON.parse(localStorage.getItem("storage"));
    const {total} = useSelector((state) => state.cartReducersTomi);
    const {items} = useSelector((state) => state.cartReducersTomi);

  useEffect(() => {
        // console.log("tb text", text)
        dispatch(loadCartTomi())
        dispatch(fillCartStorage(cartStorage));
    }, [cartStorage]);
  
    const handleReset = () => {//resetea a cero carrito tanto si es user o guest 
      dispatch(cartResetTomi())
    }
    function handleClearCart(){
      dispatch(clearCart())
      localStorage.removeItem('cartId');
      history.push('/catalogue')
      window.location.replace('')
    }


    
  function handleCatalogue(){
    history.push('/catalogue')
    window.location.replace('')
  }
  
    function handleUpdateCart(){
      let userLogParse= JSON.parse(window.localStorage.getItem("cartPost"))
      if(userLogParse){
          dispatch(recoveryCart(userLogParse))
          alert("Carrito recuperado, puede avanzar sin completar datos")
          localStorage.removeItem('cartPost')}
      else{ 
          alert("No hay carrito a recuperar")
      }
    }

 return (
        <div className="ShoppingCartContainer">
            <div className="ShoppingCartNav">
                <div className="ShoppingCartLogo"><Link to="/"><img src={logo}/></Link></div>
                <div className="ShoppingCartTitle"><h1>Shoping Cart</h1></div>
                <div className="BtnShoppingCart">
                    <button onClick={handleClearCart} className="CartItemDelete">Vaciar Carrito</button>
                    <button onClick={handleUpdateCart} className="CartItemDelete">Recuperar Carrito</button>
                    <button onClick={handleCatalogue} className="CartBack">Regresar</button>
                </div>
            </div>
            {   
               items?.length?
              items.map((product) => {
              
                return (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    id={product.id}
                    price={product.price}
                    quantity={product.quantity}
                 
                  />
                )})
      :<p>Carrito Vacio</p>}  

            <div>
                <div className="TotalShoppingCart">
                  <p>Total $650.55</p>
                  {/* {total} */}
                </div>
                <div style={{ height: '30px', padding: '10px 0', clear: 'both'}}><Divider /></div>
                <div style={{margin: '0 0 20px 0'}}>
                  <Link to="/pay" className="ContinuarBtnShoppingCart">Continuar</Link>
                </div>
            </div> 

        </div>
      )




  // const history = useHistory()

  // const dispatch = useDispatch();
  // const { cartFill } = useSelector((state) => state.cartReducer);
  // const [ cartStorage ] = useState(JSON.parse(window.localStorage.getItem("cartId")))
   
  // useEffect(() => {
  //     // console.log("tb text", text)
  //     dispatch(fillCartStorage(cartStorage));
  // }, [cartStorage]);

  // function handleClearCart(){
  //   dispatch(clearCart())
  //   localStorage.removeItem('cartId');
  //   history.push('/catalogue')
  //   window.location.replace('')
  //  }
  
  // function handleUpdateCart(){
  //   let userLogParse= JSON.parse(window.localStorage.getItem("cartPost"))
  //   if(userLogParse){
  //      dispatch(recoveryCart(userLogParse))
  //      alert("Carrito recuperado, puede avanzar sin completar datos")
  //       localStorage.removeItem('cartPost')}
  //   else{ 
  //      alert("No hay carrito a recuperar")
  //   }
  // }
  

  //   return (
  //       <div className="ShoppingCartContainer">
  //         <div className="ShoppingCartNav">
  //             <div className="ShoppingCartLogo"><Link to="/"><img src={logo}/></Link></div>
  //             <div className="ShoppingCartTitle"><h1>Shoping Cart</h1></div>
  //             <div className="BtnShoppingCart">
  //               <button onClick={handleClearCart} className="CartItemDelete">Vaciar Carrito</button>
  //               <button onClick={handleUpdateCart} className="CartItemDelete">Recuperar Carrito</button>
  //             </div>
  //         </div>
  //         { 
  //           cartFill.map((product) => {
  //             // console.log("tomi",cartFill)
  //             return (
  //               <CartItem
  //               key={product.id}
  //               name={product.name}
  //               image={product.image}
  //               name={product.name}
  //               id={product.id}
  //               price={product.price}
  //               quantity={product.quantity}
  //               />
  //             )})
  //         } 
  //         <div>
  //           <div className="TotalShoppingCart">
  //             <p>Total $650.55</p>
  //           </div>
  //           <div style={{ height: '30px', padding: '10px 0', clear: 'both'}}><Divider /></div>
  //           <div style={{margin: '0 0 20px 0'}}>
  //             <Link to="/checkout" className="ContinuarBtnShoppingCart">Continuar</Link>
  //           </div>
  //         </div> 
  //       </div>
        
  //   );
}

export default ShopingCart;