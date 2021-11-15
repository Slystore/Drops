import * as React from "react";
import { useDispatch } from "react-redux";
import { getProductStockById } from "../../redux/products/productsAction";
import { getToken } from "./../../redux/users/userActions";
import jwt_decode from "jwt-decode";
import Divider from "@mui/material/Divider";
import {
  changeProductQuantity,
  loadCart,
  removeFromCart,
  SelectCartSize,
} from "../../redux/cart/cartAction";
import "./CartItem.css";

export default function CartItem({ image, price, id, quantity, name, Sizes }) {
  const [sizeId, setSizeId] = React.useState({ SizeId: 0 });
  const [stockState, setStockState] = React.useState(0);
  const dispatch = useDispatch();

  async function handleSizeSelect(e) {
    e.preventDefault();
    await setSizeId({ SizeId: Number(e.target.value) });
  }

  async function handleCartSize(e) {
    e.preventDefault();
    dispatch(
      SelectCartSize(
        id,
        quantity,
        price,
        name,
        image,
        Sizes,
        Number(e.target.value)
      )
    );
  }
  const handleChangeQuantity = async (e) => {
    const { value } = e.target;
    const stockTotal = await dispatch(getProductStockById(id));
    let stockBySize = await stockTotal.payload.filter(
      (el) => el.SizeId === sizeId.SizeId
    );
    setStockState(stockBySize.length > 0 ? stockBySize[0].stock : 0);
    if (sizeId.SizeId > 0) {
      if (value <= stockBySize[0].stock) {
        await dispatch(
          changeProductQuantity(
            id,
            Number(value),
            price,
            name,
            image,
            Sizes,
            sizeId
          )
        );
        await dispatch(loadCart());
      } else {
        alert(`No hay suficiente stock, solo ${stockState} pares disponibles `);
      }
    } else {
      alert("Seleccione una talla antes");
    }
  };

  async function handleDeleteItemCart() {
    await dispatch(removeFromCart(id));
    let x;
    if (localStorage.getItem("token")) {
      x = getToken();
    }
    const decoded = x ? jwt_decode(x) : null;
    let user = decoded ? decoded.user.id : null;
    if (user) {
      await dispatch(loadCart());
    }
  }


  function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
  }

  return (
    <div>
      <div className="CartItemContainer">
        <div className="CartItemImage">
          <img src={image} alt="imagen no encontrada" height="250" />
        </div>
        <div className="CartItemInfo">
          <div className="NameProduct">
            <h2>{name}</h2>
          </div>
          <div className="Row">
            <div className="PriceShoppinCart">
              <h3> Precio: $ {price} </h3>
            </div>
            <div className="SelectTalle">
              <select onChange={handleSizeSelect} onClick={handleCartSize}>
                <option value="All">Talles</option>
                {Sizes
                  ? Sizes.map((size, index) => {
                      return <option value={size.id}>{size.number}</option>;
                    })
                  : null}
              </select>
            </div>
          </div>
          <div className="Row">
            <div className="QuantityTitle">
              <h2>Cantidad</h2>
            </div>
            <div className="QuantityNumber">
              <h2>{quantity}</h2>
            </div>
            <input
              type="number"
              defaultValue={quantity}
              min={1}
              max={stockState > 0 ? stockState + 1 : 7}
              onChange={handleChangeQuantity}
            />

            <div className="CartPrice">
              <div className="BtnCart">
                <button
                  onClick={handleDeleteItemCart}
                  className="CartItemButtonOption"
                >
                  Quitar de Carrito
                </button>
              </div>
              <div className="Total">
                <h2>${round(price * quantity)}</h2>
              </div>
            </div>

            <div style={{ marginTop: 10, clear: "both" }}>
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
