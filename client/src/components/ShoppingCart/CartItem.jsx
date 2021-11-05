import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { decrementCartStorage, clearCart, incrementCartStorage, deleteItemCartStorage } from '../../redux/cart/cartActions';

import {  recoveryCart } from '../../redux/cart/cartActions';

import Divider from '@mui/material/Divider';

import './CartItem.css'
import { cartResetTomi, changeProductQuantityTomi, loadCartTomi, removeFromCartTomi } from '../../redux/cartTomi/cartActionTomi';



export default function CartItem  ({image, price, title, id, quantity, name, fillState}) {
//  const {cart} = useSelector(state => state.cartReducer)
   const history = useHistory()
   // const [stateCart, setStateCart] = React.useState([])

   const dispatch = useDispatch()

   function handleIncrement(){
      dispatch(incrementCartStorage(id))
   } 
   const handleChangeQuantity = async (e) => {
      const { value } = e.target;
      await dispatch(changeProductQuantityTomi(id, Number(value)));
      await dispatch(loadCartTomi())
    };
   function handleDecrement(){
      dispatch(decrementCartStorage(id))
   } 
   
   function handleDeleteItemCart(){
      // dispatch(deleteItemCartStorage(id))

      dispatch(removeFromCartTomi(id))
 let user = JSON.parse(localStorage.getItem("storage"));
   // await Swal.fire(
   //      {
   //        text:'eliminado',
   //        icon: 'error', 
   //        width:'20rem', 
   //        timer: '500', 
   //        showConfirmButton: false 
   //      }
   //      )
   //      if(user?.uid) await dispatch(loadCart());
   } 
   const handleReset = () => {//resetea a cero carrito tanto si es user o guest 
      dispatch(cartResetTomi())
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
               <input
            type="number"
            defaultValue={quantity}//manejar stock aca con max
            min={1}
            // max={detail.stock}
            onChange={handleChangeQuantity}
          />
               {/* <div className="QuantityButtons">
                  <button onClick={handleDecrement} className="CartItemButton">-</button>
                  <button onClick={handleIncrement} className="CartItemButton" >+</button>
               </div> */}
            </div>
         </div>

         <div className="CartPrice">
               <div className="BtnCart">
                  <button onClick={handleDeleteItemCart} className="CartItemDelete">Quitar de Carrito</button>
               </div>
               <div className="BtnCart">
                  <button onClick={handleReset} className="CartItemDelete">Vaciar Carrito</button>
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