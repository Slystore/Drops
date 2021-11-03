import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { decrementCartStorage, clearCart, incrementCartStorage } from '../../redux/cart/cartActions';

import {  recoveryCart } from '../../redux/cart/cartActions';

import './CartItem.css'



export default function CartItem  ({image, price, title, id, quantity, fillState}) {
//  const {cart} = useSelector(state => state.cartReducer)
   const history = useHistory()
   // const [stateCart, setStateCart] = React.useState([])

   const dispatch = useDispatch()

   function handleIncrement(){
dispatch(incrementCartStorage(id))

 } 

   function handleDecrement(){
      dispatch(decrementCartStorage(id))
   } 

   function handleClearCart(){
      dispatch(clearCart())
      localStorage.removeItem('cartId');
     history.push('/catalogue')
      window.location.replace('')
   }
   
   function round(num) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(num);
  }
    function handleUpdateCart(){
      let userLogParse= JSON.parse(window.localStorage.getItem("cartPost"))
      if(userLogParse){
      dispatch(recoveryCart(userLogParse))
       alert("Carrito recuperado, puede avanzar sin completar datos")
       localStorage.removeItem('cartPost')}
     else{ alert("No hay carrito a recuperar")}
    }
   return (
   <div>
      <div className="CartItemContainer">

         <div className="CartItemImage">
            <img src={image} alt="imagen no encontrada" height='250'/>
         </div>

         <div className="CartItemInfo">

            <div>
               <h2>{title}</h2>
            </div>

         </div>

         <div className="CartPrice">

            <div className="Price">
               <h3> Precio: $ {price} </h3>
            </div>
      
            <div className="Tickets">
               <div style={{width: 250, margin: '0 auto', textAlign: 'center'}}>
                  <h3>Cantidad :</h3> 
                
                  <button onClick={handleIncrement} className="CartItemButton" >+</button>
                  <button onClick={handleDecrement} className="CartItemButton">-</button>
                  <div className="Quantity">{quantity}</div>
               </div>
               <div className="Total">
                  <h2>TOTAL: ${ round(price*quantity) }</h2>
               </div>
            </div>

         </div>

      </div>
      <div className="CartItemDeleteContainer">
         <button onClick={handleClearCart} className="CartItemDelete">Vaciar Carrito</button> 
         <button onClick={handleUpdateCart} className="CartItemDelete">Recuperar Carrito</button>
      </div>
   </div>
   )
}