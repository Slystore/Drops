import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from './Checkout';
import axios from 'axios'
import './Pay.css';
import jwt_decode from "jwt-decode";
import { getToken } from '../../redux/users/userActions';

function Pay() {
    const [datos, setDatos] = useState("")
    const orderId = JSON.parse(window.localStorage.getItem("orderId"))
    const {total} = useSelector((state) => state.cartReducersTomi)
    const {items} = useSelector((state) => state.cartReducersTomi);
    let x
    if(localStorage.getItem('token')){
         x = getToken();}
    const decoded = x?jwt_decode(x): null;
    let userId = decoded?decoded.user.id: null

    useEffect(()=>{
        if(userId){
    axios.get("http://localhost:3001/api/mercadopago/" + userId)
        .then((data)=>{
        setDatos(data.data)
        console.log('numero de orden:', data)
     
        }).catch(err => console.error(err)) }
    },[userId])
    console.log('datos ID', datos)
    console.log('ORDER ID', orderId)
    console.log('userID', userId)


    return (
        <div className="PayContainer">
             <Checkout products={items} total={total} data={datos}/>
        </div>
    )
}

export default Pay
