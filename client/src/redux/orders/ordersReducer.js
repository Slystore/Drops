import { GET_ORDERS, GET_ORDERS_BY_ID } from "./ordersAction";



export const initialState = {
    orders: [],
    orderId: {},

};


function OrdersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            {
                return {
                    ...state,
                    orders: action.payload,
                }
            }
        case GET_ORDERS_BY_ID:
            {
                return {
                    ...state,
                    orderId: action.payload,
                }
            }

        default:
            return state

    }

}

export default OrdersReducer;
