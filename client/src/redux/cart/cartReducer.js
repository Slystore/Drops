import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CART_RESET,
    LOAD_CART,
    CHANGE_QUANTITY,
    SELECT_SIZEID,
  } from "./cartAction";
//   import { USER_LOG_OUT } from "../actions/userActions";
  
  const initialState = {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
    total: 0,
  };
  
  export default function cartReducers(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          items: action.payload.sort( (a,b) => a.productId - b.productId),
        };
      case REMOVE_FROM_CART:
        let cartFilter = state.items;
        let newCart = cartFilter.filter((e) => e.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          items: newCart.sort( (a,b) => a.productId - b.productId),
          total: newCart.reduce( (t,s) => {
            return t + (s.price * s.quantity)
          },0)
        };
      case CART_RESET:
        return {
          ...state,
          items: action.payload.items,
          total: action.payload.total
        };
      case LOAD_CART:
        if(!action.regiter){// es register corregir
          return {
            ...state,
            items: action.payload.sort( (a,b) => a.productId - b.productId),
            total: action.payload.reduce( (t,s) => {
              return t + (s.price * s.quantity)
            },0).toFixed(2)
          };
        }
        else {
  
  
          return {
            ...state,
            items: action.payload.sort( (a,b) => a.productId - b.productId),
            total: action.payload.reduce( (t,s) => {
              return t + (s.price * s.quantity)
            },0).toFixed(2)
          }
        }
        // case USER_LOG_OUT: return {
        //   ...state,
        //   items: [],
        //   total: 0
        // }
        case CHANGE_QUANTITY:
            let cart = state.items;
            for (var item of cart) {
                    if (item.id === action.payload.id) {
                      item.quantity = action.payload.quantity;
                    }
                  }
                  localStorage.setItem("cart", JSON.stringify(cart));
        return{
            ...state,
        }
        case SELECT_SIZEID:
            let cart2 = state.items;
            for (var item2 of cart2) {
                    if (item2.id === action.payload.id) {
                      item2.SizeId = action.payload.SizeId;
                    }
                  }
                  localStorage.setItem("cart", JSON.stringify(cart2));
                  return{
                    ...state,
                }
      default:
        return state;
    }
  }
  