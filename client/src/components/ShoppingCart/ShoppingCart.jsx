import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartReset,
  fusionCart,
  loadCart,
} from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Divider from "@mui/material/Divider";
import CartItem from "./CartItem";
import logo from "../../assets/Logo.png";
import { getToken } from "./../../redux/users/userActions";
import jwt_decode from "jwt-decode";
import "./ShoppingCart.css";

function ShopingCart() {
  const dispatch = useDispatch();
  const history = useHistory();
  let x;
  if (localStorage.getItem("token")) {
    x = getToken();
  }
  const decoded = x ? jwt_decode(x) : null;
  const { total } = useSelector((state) => state.cartReducers);
  const { items } = useSelector((state) => state.cartReducers);
  let user = decoded ? decoded.user.id : null;

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch, user]);

  const handleReset = () => {
    dispatch(cartReset());
    history.push("/catalogue");
  };
  let SizeIdmap=items.filter(el => el.SizeId === 0|| el.SizeId === null);

  async function handleSubmit() {
    if(SizeIdmap.length===0){
    if (user) {
      await fusionCart(user);
      await dispatch(loadCart(user));
    }
  }else{
    history.push("/shoppingCart");
      alert("Por Favor, elegir talle antes de seguir");
     window.location.reload();
    }
  }

  function handleCatalogue() {
    history.push("/catalogue");
    window.location.replace("");
  }

  return (
    <div className="ShoppingCartContainer">
      <div className="ShoppingCartNav">
        <div className="ShoppingCartLogo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="ShoppingCartTitle">
          <h1>Shoping Cart</h1>
        </div>
        <div className="BtnShoppingCart">
          <button onClick={handleReset} className="CartItemDelete">
            Vaciar Carrito
          </button>
          <button onClick={handleCatalogue} className="CartBack">
            Regresar
          </button>
        </div>
      </div>
      {items?.length ? (
        items.map((product) => {
          return (
            <CartItem
              key={product.id}
              name={product.name}
              image={product.image}
              id={product.id}
              price={product.price}
              quantity={product.quantity}
              Sizes={product.Sizes}
            />
          );
        })
      ) : (
        <p>Carrito Vacio</p>
      )}

      <div>
        <div className="TotalShoppingCart">
          <p>Total ${total}</p>
        </div>
        <div style={{ height: "25px", padding: "5px 0", clear: "both" }}>
          <Divider sx={{ border: 'thin', color:'#00000080'}} />
        </div>
        <div style={{ margin: "0 0 10px 0" }}>
          <Link 
            to={!user ? "/login" : (SizeIdmap.length===0? "/shipment": "/shoppingCart")}
            className="ContinuarBtnShoppingCart"
            onClick={handleSubmit}
          >
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopingCart;
