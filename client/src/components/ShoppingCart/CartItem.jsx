import * as React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { decrementCartStorage, clearCart, incrementCartStorage, deleteItemCartStorage } from '../../redux/cart/cartActions';
import {  cleanDetail, getProductStockById, getProductStockBySize } from '../../redux/products/productsAction';
import { getToken } from './../../redux/users/userActions'
import jwt_decode from "jwt-decode";
import {  recoveryCart } from '../../redux/cart/cartActions';

import Divider from '@mui/material/Divider';

import './CartItem.css'
import { cartResetTomi, changeProductQuantityTomi, loadCartTomi, removeFromCartTomi, SelectCartSize } from '../../redux/cartTomi/cartActionTomi';

export default function CartItem  ({image, price, title, id, quantity, name, Sizes}) {
//  const {cart} = useSelector(state => state.cartReducer)
   //  const { id } = props.match.params
   //   console.log(Sizes,"tomisize")
   const history = useHistory()
    const [sizeId, setSizeId] = React.useState({SizeId:0})
const[stockState, setStockState] = React.useState(0)
   const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch(getProductsById(id))
   //    dispatch(getProductStockById(id))
   //    return () => dispatch(cleanDetail(id))
   // }, [dispatch, id]);
   const {items} = useSelector((state) => state.cartReducersTomi);
   const {productId} = useSelector((state) => state.productReducer);
   const {stockById} = useSelector((state) => state.productReducer);


   async function handleSizeSelect(e){
      e.preventDefault()
     await setSizeId({SizeId:Number(e.target.value)})
   } 
  
   async function handleCartSize(e){
      e.preventDefault()
      //  console.log(sizeId, e.target.value,"sizeidtomi")
      // console.log(id,quantity,price,name,image)
      dispatch(SelectCartSize(id,quantity,price,name,image, Sizes,Number(e.target.value)))
   }
   const handleChangeQuantity = async (e) => {
      const { value } = e.target;
      const stockTotal= await dispatch(getProductStockById(id))
      let stockBySize= await stockTotal.payload.filter(el => el.SizeId== sizeId.SizeId)
      setStockState(stockBySize.length>0?stockBySize[0].stock:0)
   if(sizeId.SizeId>0){
      if(value <= stockBySize[0].stock){
      await dispatch(changeProductQuantityTomi(id, Number(value), price, name, image,Sizes, sizeId))
      await dispatch(loadCartTomi())
      // console.log("entrostocktomi")
    }
   else{ alert(`No hay suficiente stock, solo ${stockState} pares disponibles `)}
   }else{
   alert("Seleccione una talla antes")}
}
   
  async function handleDeleteItemCart(){
      // dispatch(deleteItemCartStorage(id))
await dispatch(removeFromCartTomi(id))
let x
    if(localStorage.getItem('token')){
         x = getToken();}
    const decoded = x?jwt_decode(x): null;
    let user = decoded?decoded.user.id: null
       if(user){ await dispatch(loadCartTomi());}
   } 
   const handleReset = () => {//resetea a cero carrito tanto si es user o guest 
      dispatch(cartResetTomi())
    }
   
   function round(num) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(num);
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
                  <select   onChange={handleSizeSelect} onClick={handleCartSize}>
               <option value="All" >Talles</option> 
                {Sizes?Sizes.map((size, index) => {
                  return (
                    // <div key={index}>
                      <option value={size.id}>{size.number}</option>
                      );
                     }):null}
                  {/* <select className="SelectShoppingCart">
                     <option value="">Talle</option>
                     <option value="">40</option>
                     <option value="">41</option>
                     <option value="">42</option> */}
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
             max={stockState>0?stockState+1:7}
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
               {/* <div className="BtnCart">
                  <button onClick={handleReset} className="CartItemDelete">Vaciar Carrito</button>
               </div> */}
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




