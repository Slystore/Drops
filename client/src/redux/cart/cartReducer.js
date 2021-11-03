import {
  ADD_TO_CART,
  FILL_CART_STORAGE,
  GET_PRODUCTS,
  STORAGE,
  INCREMENT_CART_STORAGE,
  DECREMENT_CART_STORAGE,
  CLEAR_CART,
  RECOVERY_CART,
} from "./cartActions";

export const initialState = {
  cart: [],
  products: [],
  storage: [],
  cartFill: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let iteminCart = state.cart.find((item) => item.id === newItem.id);

      return iteminCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case STORAGE:
      let estado = state.cart;
      window.localStorage.setItem("cartId", JSON.stringify(estado));
      let store2 = JSON.parse(window.localStorage.getItem("CartId"));
      return {
        ...state,
        storage: store2,
      };
    case FILL_CART_STORAGE: {
      return {
        ...state,
        cartFill: action.payload !== null ? action.payload : [],
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
        cartFill: [],
      };
    }
    case INCREMENT_CART_STORAGE: {
      let result2 = state.cartFill.map((item) =>
        item.quantity ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        cartFill: result2,
      };
    }
    case DECREMENT_CART_STORAGE: {
      let result2 = state.cartFill.map((item) =>
        item.quantity ? { ...item, quantity: item.quantity - 1 } : item
      );
      
      return {
        ...state,
        cartFill: result2,
      };
    }
    case RECOVERY_CART:
      return {
        ...state,
       // ?: action.payload,
      };
    default:
      return state;
  }
}

export default cartReducer;
