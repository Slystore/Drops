import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { decrementCartStorage, clearCart, incrementCartStorage, deleteItemCartStorage } from '../../redux/cart/cartActions';

import {  recoveryCart } from '../../redux/cart/cartActions';

import Divider from '@mui/material/Divider';

import './CartItem.css'



export default function CartItem  ({image, price, title, id, quantity, name, fillState}) {
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
   
   function handleDeleteItemCart(){
      dispatch(deleteItemCartStorage(id))
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
      else{ 
         alert("No hay carrito a recuperar")
      }
   }

   return (
   <div>
      <div className="CartItemContainer">

         <div className="CartItemImage"><img src={image} alt="imagen no encontrada" height='250'/></div>

         <div className="CartItemInfo">
            <div className="NameProduct"><h2>{name}</h2></div>
            <div className="Price"><h3> Precio: $ {price} </h3></div>
            <div className="Quantity">
               <div className="QuantityTitle"><h2>Cantidad</h2></div>
               <div className="QuantityNumber"><h2>{quantity}</h2></div>
               <div className="QuantityButtons">
                  <button onClick={handleDecrement} className="CartItemButton">-</button>
                  <button onClick={handleIncrement} className="CartItemButton" >+</button>
               </div>
            </div>
         </div>

         <div className="CartPrice">
               <div className="BtnCart">
                  <button onClick={handleDeleteItemCart} className="CartItemDelete">Quitar de Carrito</button>
               </div>
               <div className="BtnCart">
                  <button onClick={handleClearCart} className="CartItemDelete">Vaciar Carrito</button>
               </div>
               <div className="BtnCart">
                  <button onClick={handleUpdateCart} className="CartItemDelete">Recuperar Carrito</button>
               </div>

               <div className="Total">
                  <h2>TOTAL: ${ round(price*quantity) }</h2>
               </div>
         </div>

      <div style={{ marginTop:10, clear: 'both'}}><Divider /></div>
      </div>
     
   </div>
   )
}