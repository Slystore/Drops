import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART'
export const GET_PRODUCTS = 'GET_PRODUCTS'

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}
export function getProducts(pagina){
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/products`)
            return await dispatch({
                type: GET_PRODUCTS,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }
    }
}