import { GET_ORDERS, GET_ORDERS_BY_ID,GET_USER_ORDER_ID } from "./ordersAction";



export const initialState = {
    orders: [],
    orderId: {},
    userOrder:[]

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
        case GET_USER_ORDER_ID:{
            return{
                ...state,
                userOrder:action.payload
            }
        }
        default:
            return state

    }

}

export default OrdersReducer;
