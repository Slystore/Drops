import * as React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { decrementCartStorage, clearCart, incrementCartStorage, deleteItemCartStorage } from '../../redux/cart/cartActions';
import {  cleanDetail, getProductsById, getProductStockById } from '../../redux/products/productsAction';

import {  recoveryCart } from '../../redux/cart/cartActions';

import Divider from '@mui/material/Divider';

import './CartItem.css'
import { cartResetTomi, changeProductQuantityTomi, loadCartTomi, removeFromCartTomi } from '../../redux/cartTomi/cartActionTomi';

export default function CartItem  ({image, price, title, id, quantity, name, fillState}) {
//  const {cart} = useSelector(state => state.cartReducer)
   // const { id } = props.match.params
   const history = useHistory()
   // const [stateCart, setStateCart] = React.useState([])

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductsById(id))
      dispatch(getProductStockById(id))
      return () => dispatch(cleanDetail(id))
   }, [dispatch, id]);

   const {productId} = useSelector((state) => state.productReducer);
   const {stockById} = useSelector((state) => state.productReducer);

   // productId.name ? console.log("ProductID",productId.name) : console.log("No despacha la acción")
   // console.log("ID",id)
   // console.log("Stock",stockById.data)

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
      {/* <div className="BtnCart">
         <button onClick={handleClearCart} className="CartItemDelete">Vaciar Carrito</button>
      </div> */}
      <div className="CartItemContainer">

         <div className="CartItemImage"><img src={image} alt="imagen no encontrada" height='250'/></div>
         <div className="CartItemInfo">
            <div className="NameProduct"><h2>{name}</h2></div>
            <div className="Row">
               <div className="PriceShoppinCart"><h3> Precio: $ {price} </h3></div> 
               <div className="SelectTalle">
                  <select className="SelectShoppingCart">
                     <option value="">Talle</option>
                     <option value="">40</option>
                     <option value="">41</option>
                     <option value="">42</option>
                  </select>
               </div>
            </div>
            <div className="Row">
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
                     <button onClick={handleDecrement} className={quantity > 1? 'CartItemButton':'CartItemButtonDisabled'} >-</button>
                     <button onClick={handleIncrement} className="CartItemButton" >+</button>
                  </div>
            </div>
         </div> */}

         <div className="CartPrice">
               <div className="BtnCart">
                  <button onClick={handleDeleteItemCart} className="CartItemButtonOption">Quitar de Carrito</button>
               </div>
               <div className="BtnCart">
                  <button onClick={handleReset} className="CartItemDelete">Vaciar Carrito</button>
               </div>
               <div className="BtnCart">
                  <button onClick="" className="CartItemButtonOption">Guardar para Después</button>
               </div>
               <div className="Total">
                  <h2>${ round(price*quantity) }</h2>
               </div>
         </div>

         <div style={{ marginTop:10, clear: 'both'}}><Divider /></div>
      </div>
     </div>
     </div>
   </div>
   )
};




{/* 
<div> */}
   {/* <div>

      {
            productId.Sizes.map((size, index) => {
               return (   
                        <div>
                           <div className="Talle">#{size.number}</div>
                           <div className="Stock"> Stock {stockById[index] ? stockById[index].stock : 0} pares</div>
                        </div>
               )}
      )}
   </div> */}
   {/* <select >
      <option value="">Talles</option>
       {
         productId.Sizes.map((talle, index) => {
            return (   
                     <option>{talle.number} | {stockById[index].stock}</option>
                  //   <div>
                  //       <div className="Talle">#{size.number}</div>
                  //       <div className="Stock"> Stock {stockById[index] ? stockById[index].stock : 0} pares</div>
                  //   </div>
            )}
    )
      } 
   </select>
</div> */}
{/* 
   </div>
   
   <div className="Stock"> Stock 5 pares</div>
</div> */}
{/* <div className="BtnCart">
   <button onClick={handleUpdateCart} className="CartItemDelete">Recuperar Carrito</button>
</div> */}