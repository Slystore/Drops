import React, { useEffect, useState } from "react";
import axios from "axios";
import Divider from "@mui/material/Divider";
import logo from '../../assets/Logo.png';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Checkout.css";
import { getSizes } from "../../redux/sizes/sizeActions";
import { useDispatch, useSelector } from "react-redux";

function Checkout({ products, data, total, user }) {
const dispatch = useDispatch();
let SizeId= products.map(el=>el.SizeId);
console.log(SizeId,"match");
  const [orderUser, setorderUser] = useState("");

  let orderId = JSON.parse(localStorage.getItem("orderId"));

  useEffect(() => {
    if (orderId) {
      axios
      .get(`/orders/${orderId}`)
        .then((dataOrder) => {
          setorderUser(dataOrder.data);
          console.log("DATATATA:", dataOrder);
        })
        .catch((err) => console.error(err));
    }
    dispatch(getSizes());
  }, [orderId]);
  const { sizes } = useSelector((state) => state.sizeReducer);
  let array = [];
for(let i=0;i<SizeId.length;i++){
  for(let j=0;j<sizes.length;j++){
    if(SizeId[i]===sizes[j].id){
      array.push(sizes[j].number);
    }
  }
}
// console.log("NUMBERSIZE", array)
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   const attr_data_preference = document.createAttribute("data-preference-id");

  //   attr_data_preference.value = data.id;
    
  //   script.src =
  //     "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  //   script.setAttributeNode(attr_data_preference);

  //   document.getElementById("form1").appendChild(script);
  //    return () => {
  //       document.getElementById("form1").removeChild(script);
  //    };
  // }, [data]);

  let merca = data.init_point

  function round(num) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return (Math.round(m) / 100) * Math.sign(num);
  }
  console.log("PAY USER",user.user)

  return (
    <div className="CheckoutContainer">

        <div className="CheckoutContainerTitle">
          <div className="CheckoutLogo"><img src={logo} alt="Logo Drops"/></div>
          <div className="CheckoutTitle"><h4>Listado de Compras</h4></div>
        </div>

        <div className="CheckoutInfoShop">
            <div className="CheckoutInfoProduct">
                {/* <form id="form1"> */}

                    {products &&
                      products.map((producto, i) => {
                        return (
                          <div className="listShoppingCart" key={i}>
                              <div className="ImgCheckout">
                                <img src={producto.image}  alt="Imagen de Producto"/>
                              </div>
                              <div className="DetailCheckout">
                                  <div className="DetailCheckoutName">{producto.name}</div>
                                  <div className="DetailCheckoutPrice">${producto.price}</div>
                                  <div className="DetailCheckoutPrice">Talle: {array[i]}</div>
                                  <div className="DetailCheckoutQuantity">
                                      <i>Cantidad:</i> 
                                      <h3>{producto.quantity}</h3> 
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>TOTAL:</i> 
                                      <h3>${ round(producto.quantity * producto.price) }</h3>
                                  </div>
                              </div>
                            
                            {/* {producto.name} - {producto.price} - {producto.quantity}-{" "} */}
                            
                          </div>
                        );
                      })}{" "}

                {/* </form> */}
                <div className="DetailCheckoutTotal">Total: ${total}</div>
            </div>

            <div className="CheckoutInfoUser">
                <div className="DataUserCheckout">
                    <div className="DataUserName">
                        <AccountCircleIcon 
                            sx={{
                                fontSize: 50,
                            }} />
                        <h5>{user.user.name} {user.user.surname}</h5>
                    </div>
                    <div className="DataUserDivider"><Divider /></div>
                    <div className="DataUserCheckoutRowTitle"><h5>Datos de contacto</h5></div>
                    <div className="DataUserCheckoutRow">{user.user.mail}</div>
                    <div className="DataUserCheckoutRow">{user.user.phone}</div>
                    <div className="DataUserDivider"><Divider /></div>
                    <div className="DataUserCheckoutRowTitle"><h5>Datos de envío</h5></div>
                    <div className="DataUserCheckoutRow">{orderUser.shippingAddress}</div>
                    <div className="DataUserCheckoutRow">{orderUser.shippingCity}</div>
                    <div className="DataUserCheckoutRow">{orderUser.shippingLocated}</div>
                    <div className="DataUserCheckoutRow">C.P. {orderUser.shippingZip}</div>
                </div>

                <div className="UserPay">
                  <a href={merca} className="LinkMercadoPago hvr-grow-shadow" >Pagar</a>
                  {/* <form id="form1"></form> */}

                </div>
            </div>
        </div>
    </div>
  );
}

export default Checkout;
