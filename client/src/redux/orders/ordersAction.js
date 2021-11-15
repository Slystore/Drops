import axios from "axios";
export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDERS_BY_ID = "GET_ORDERS_BY_ID";



export function getOrders() {
    return async (dispatch) => {
        const { data } = await axios.get('/orders')
        return await dispatch({
            type: GET_ORDERS,
            payload: data
        })
    }

}
export function getOrdersById(id) {
    return async (dispatch) => {
        const { data } = await axios.get(`orders/${id}`)
        return await dispatch({
            type: GET_ORDERS_BY_ID,
            payload: data
        })
    }

}