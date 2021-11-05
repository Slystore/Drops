import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillCartStorage } from "../../redux/cart/cartActions";
import { cartResetTomi, loadCartTomi } from "../../redux/cartTomi/cartActionTomi";
import CartItem from "./CartItem";

function ShopingCart() {
    const dispatch = useDispatch();
    const { cartFill } = useSelector((state) => state.cartReducer);
    const [ cartStorage ] = useState(JSON.parse(window.localStorage.getItem("cartId")))
   
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

    return (
        <div>
            <h1>Shoping Cart</h1>
          { 
               items?.length?
              items.map((product) => {
                // console.log("tomi",cartFill)
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
        </div>
    );
}

export default ShopingCart;