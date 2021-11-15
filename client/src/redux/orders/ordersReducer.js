import { GET_ORDERS, GET_ORDERS_BY_ID, FILTER_BY_STATUS } from "./ordersAction";



export const initialState = {
    orders: [],
    orderId: {},
    allOrders: []

};


function OrdersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            {
                return {
                    ...state,
                    orders: action.payload,
                    allOrders: action.payload
                }
            }
        case GET_ORDERS_BY_ID:
            {
                return {
                    ...state,
                    orderId: action.payload,
                }
            }
        case FILTER_BY_STATUS: {


            let filterStatus = action.payload === "All"
                ? state.allOrders
                : state.allOrders.filter((el) => el.status.includes(action.payload));


            return {
                ...state,
                orders: filterStatus
            }
        }
        default:
            return state

    }

}

export default OrdersReducer;
