import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chekout from './Checkout';
import axios from 'axios'
import './Pay.css';
var total = 0
var i = 0
function Pay() {

    const [datos, setDatos] = useState("")

    const { cartFill } = useSelector((state) => state.cartReducer);

    console.log("Carrito", cartFill)

    useEffect(()=>{
    axios.get("http://localhost:3001/api/mercadopago")
        .then((data)=>{
        setDatos(data.data)
        console.log('Contenido de data:', data)
        // console.info('Contenido de data:', data)
        }).catch(err => console.error(err)) 
    },[])



    return (
        <div className="PayContainer">
            {
               
                 cartFill.map((product) => {
                    // console.log("tomi",cartFill)
                    i++
                    total = total + parseInt(product.price)
                    console.log("total",total)
                    console.log("vuelta",i)
                    return (
                        <div>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <div>{product.quantity}</div>
                        </div>
                      
                    )})
            }
            <div>{total}</div>
            <div><a href={datos.init_point} >Pagar</a></div>
        </div>
    )
}

export default Pay
