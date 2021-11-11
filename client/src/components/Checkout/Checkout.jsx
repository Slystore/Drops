import React, { useEffect, useState } from "react";
import './Checkout.css';

// function Chekout({products,data}) {
function Checkout({products,data, total}) {
    // console.log("PRODUCTOS",productos)

    useEffect(()=>{
        const script = document.createElement('script');
        const attr_data_preference = document.createAttribute('data-preference-id')
        //const attr_nonce = document.createAttribute('nonce')
      
        attr_data_preference.value = data.id

        console.log(attr_data_preference)
        //attr_nonce.value = 'abcdefg'
        script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.setAttributeNode(attr_data_preference)
       // script.setAttributeNode(attr_nonce)
      console.log(data)
        document.getElementById('form1').appendChild(script)
        return () =>{
        //    document.getElementById('form1').removeChild(script);
        }
       },[data])


    return (
        <div className="CheckoutContainer">
            <form id='form1'>

                <h4>Listado de Compras</h4>
                <ul className="listShoppingCart">
                {products && products.map((producto, i) => {
                    return(
                    
                        <li key={i}>{producto.name} - {producto.price} - {producto.quantity}
                        - {total}</li>   
                        
                    )
                })} </ul>  

            </form>
        </div>
    )
}

export default Checkout
