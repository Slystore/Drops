import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import axios from "axios";
import "./Pay.css";
import jwt_decode from "jwt-decode";
import { getToken } from "../../redux/users/userActions";

function Pay() {

  const [datos, setDatos] = useState("");
  const { total } = useSelector((state) => state.cartReducers);
  const { items } = useSelector((state) => state.cartReducers);
  let x;
  if (localStorage.getItem("token")) {
    x = getToken();
  }
  console.log(x);
  const decoded = x ? jwt_decode(x) : null;
  console.log(decoded);
  let userId = decoded ? decoded.user.id : null;

  useEffect(() => {
    if (userId) {
      axios
        .get("/mercadopago/" + userId)
        .then((data) => {
          setDatos(data.data);
          console.log("numero de orden:", data);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);
  return (
    <div className="PayContainer">
      <Checkout products={items} total={total} data={datos} user={decoded}/>
    </div>
  );
}

export default Pay;
