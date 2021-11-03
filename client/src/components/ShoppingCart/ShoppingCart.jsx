import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillCartStorage } from "../../redux/cart/cartActions";
import CartItem from "./CartItem";

function ShopingCart() {
    const dispatch = useDispatch();
    const { cartFill } = useSelector((state) => state.cartReducer);
    const [ cartStorage ] = useState(JSON.parse(window.localStorage.getItem("cartId")))
   
    useEffect(() => {
        // console.log("tb text", text)
        dispatch(fillCartStorage(cartStorage));
    }, [cartStorage]);

    return (
        <div>
            <h1>Shoping Cart</h1>
          { 
              
              cartFill.map((product) => {
                // console.log("tomi",cartFill)
                return (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    name={product.name}
                    id={product.id}
                    price={product.price}
                    quantity={product.quantity}
                 
                  />
                  
                )})
      }  
        </div>
    );
}

export default ShopingCart;