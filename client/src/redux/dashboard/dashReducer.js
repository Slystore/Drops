import { GET_ORDERS_COUNT, GET_USERS_COUNT, GET_PRODUCT_QUANTITY } from "./dashAction";

export const initialState = {
  usersCount: [],
  ordersCount: [],
  productQuantity: []
};

function dashReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_COUNT: {
      return {
        ...state,
        usersCount: action.payload,
      };
    }
    case GET_ORDERS_COUNT: {
      let suma = 0;
      action.payload.forEach((element) => {
        let total = element.price * element.quantity;
        suma = suma + total;
      });
      return {
        ...state,
        ordersCount: suma,
      };
    }
    case GET_PRODUCT_QUANTITY: {
        return {
            ...state,
            productQuantity: action.payload,
        }
    }
    default:
      return state;
  }
}

export default dashReducer;
