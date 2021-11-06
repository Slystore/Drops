import axios from "axios";
import jwt_decode from "jwt-decode";
import { getToken } from '../users/userActions';

export const ADD_TO_CART_TOMI = "ADD_TO_CART_TOMI";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const LOAD_CART = "LOAD_CART";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const FUSION_CART = "FUSION_CART";

let x
if(localStorage.getItem('token')){
     x = getToken();}
const decoded = x?jwt_decode(x): null;
// const decoded = 4
export const addToCartTomi = (id, quantity, price, name, image) => async (dispatch) => {
  let product = {
    id,
    quantity,
    price,
    name,
    image
  };
  let user3 = decoded?decoded.user.id: null
  let user = JSON.parse(window.localStorage.getItem("storage"));
  let orderId = JSON.parse(window.localStorage.getItem("orderId"));

  try {

    if (user3) {
      let info = { userId: user3, products: [{ productId: id, quantity, price, name,image }] }

      if (orderId) {
        await axios.put("http://localhost:3001/api/orders/updateOrder/" + orderId, info)
      }
      else {
        let res = await axios.post("http://localhost:3001/api/orders/createOrder", info)
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
      }
    }

    else {

      let cart = JSON.parse(localStorage.getItem("cart"));

      if (!cart || !cart.length) {
        quantity = 1;
        localStorage.setItem("cart", JSON.stringify([{ ...product, quantity }]));
      } else {
        let ids = cart.map((e) => e.id);
        if (!ids.includes(id)) {
          quantity = 1;
          cart.push({ ...product, quantity });
        } else {
          for (var item of cart) {
            if (item.id === id) {
              item.quantity = quantity === "add" ? ++item.quantity : quantity;
              item.price = price;
              quantity = item.quantity;
            }
          }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
      }

      dispatch({
        type: ADD_TO_CART_TOMI,
        payload: JSON.parse(localStorage.getItem("cart")),
      });

    }

  } catch (e) {
    console.log(e);
  }
};

export const removeFromCartTomi = (id) => (dispatch, getState) => {

  try {
    let user = JSON.parse(localStorage.getItem("storage"));

    if (user?.uid) {
      let info = { userId: user.uid, productId: id }// deleteOrder/:id ?como va
      axios.delete("http://localhost:3001/api/orders/deleteOrder/", { data: { ...info } })
    }
    else {
    //   let cart = getState().cart.items;
    //   let newCart = cart.filter((e) => e.id !== id);
      dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
      });
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    }
  } catch (error) {
    console.log(error)
  }


  //sweetAlert("Eliminado", "success", "OK", 1000);
};

export const cartResetTomi = () => async (dispatch) => {


  let user = JSON.parse(localStorage.getItem("storage"));
  let orderId = JSON.parse(localStorage.getItem("orderId"));

  
  if (user?.uid && orderId) {

    console.log("entro aca wey")
    await axios.delete( "http://localhost:3001/api/orders/deleteOrder/" + orderId)
    window.localStorage.removeItem("orderId")
  }
  else {
    //sweetAlert("Vaciado", "success", "OK", 1000);
    localStorage.removeItem("cart");
  }

  return dispatch({
    type: CART_RESET,
    payload: {
      items: [],
      total: 0
    }
  });
};


export const changeProductQuantityTomi =
  (id, quantity) => async (dispatch, getState) => {

    let user = JSON.parse(localStorage.getItem("storage"));

    if (user?.uid) {
      let orderId = JSON.parse(localStorage.getItem("orderId"));
      let info = { products: [{ productId: id, quantity }] }
      await axios.put("http://localhost:3001/api/orders/updateOrder/" + orderId, info)
    }
    else {
    //   let cart = getState().cart.items;
    //   for (var item of cart) {
    //     if (item.id === id) {
    //       item.quantity = quantity;
    //     }
    //   }
    //   localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
        type: CHANGE_QUANTITY,
        payload: {
            id,
            quantity
        },
      });
    }
  };

export const loadCartTomi = () =>
  async (dispatch) => {
  
    let user1 = decoded?decoded.user.id: null
    let user = JSON.parse(localStorage.getItem("storage"));

    if (user1) {
       
      let orderId = JSON.parse(localStorage.getItem("orderId"));
      console.log("here", orderId)
      let cart = await axios.get("http://localhost:3001/api/orders/" + orderId)//order solamente
      if(cart.data.status !== "inCart"){//viene del back cart
        let res = await axios.post("http://localhost:3001/api/orders/createOrderTomi", {userId:user1})
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
        cart = await axios.get("http://localhost:3001/api/orders/" + res.data.orderId)
      }
console.log(cart.data, "tomiload")
      cart = cart?cart.data.products.map(e => {
        // console.log(e, "tomiload")viene productid quantity id userid
        return {
          id: e.id,
          quantity: e.quantity,
          price: e.price,
          name: e.name,
          image: e.image
          // ...e.Order_Product//OrderDetail nuestro console loguear
        }
      }):[];

      dispatch({
        type: LOAD_CART,
        register: true,
        payload: cart,
      });

    } else {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      dispatch({
        type: LOAD_CART,
        register: false,
        payload: cart,
      });
    }
  };

export const checkoutTomi = () => async (dispatch, getState) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  try {
    axios.post("http://localhost:3001/api/orders/createOrderTomi", { cart });
  } catch (e) {
    console.log(e);
  }
};

export const updateTotalTomi = () => {
  return { type: UPDATE_TOTAL };
};


export const fusionCartTomi = async (id) => {
  try {
    let user2 = decoded?decoded.user.id: null
    // let user = JSON.parse(localStorage.getItem("storage")) || id;
    let products = JSON.parse(localStorage.getItem("cart"));

    if (products) {

      products = products.map(e => {
        return {
          productId: e.id,
          quantity: e.quantity,
        }
      })
    }
// console.log(products,"tomi")
    if (user2) {

      if (products?.length > 0) {
        let info = { userId: user2, products }
        let res = await axios.post("http://localhost:3001/api/orders/createOrderTomi", info)
        // console.log(res,"tomicart")
        if(res.data.status !== "inCart"){
          res = await axios.post("http://localhost:3001/api/orders/createOrderTomi", {userId:user2})
        }
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
        if (res.data.message === false) {
          await axios.put("http://localhost:3001/api/orders/updateOrder/" + res.data.orderId, info)
        }
      }
      else {
        let res = await axios.post("http://localhost:3001/api/orders/createOrderTomi", { userId: user2 })
        if(res.data.status !== "inCart"){
          res = await axios.post("http://localhost:3001/api/orders/createOrderTomi", {userId:user2})
        }
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
      }
      window.localStorage.removeItem("cart")
    }


  } catch (error) {
    console.log("tiro errooooooorrrrrrrrrrrrrrrrr", error)
  }
};





