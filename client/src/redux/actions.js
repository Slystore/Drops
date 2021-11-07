
import axios from 'axios'


export const GET_ORDERS = 'GET_ORDERS'
export const GET_WISH_LISTS = 'GET_WISH_LISTS'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_BRANDS = 'GET_BRANDS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_BRANCHS = 'GET_BRANCHS'


//Orders

export function getOrders(){
    return async (dispatch) => {
        const { data } = await axios.get('/orders')
        return await dispatch({
            type: GET_ORDERS,
            payload: data
        })
    }

}

//Wish Lists

export function getWishList(){
    return async (dispatch) => {
        const { data } = await axios.get('/wishlist')
        return await dispatch({
            type: GET_WISH_LISTS,
            payload: data
        })
    }

}

//Products

export function getProducts(){
    return async (dispatch) => {
        const { data } = await axios.get('/products')
        return await dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }

}



//Category

export function getCategories(){
    return async (dispatch) => {
        const { data } = await axios.get('/category')
        return await dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    }

}

//Branch

export function getBranchs(){
    return async (dispatch) => {
        const { data } = await axios.get('/branch')
        return await dispatch({
            type: GET_BRANCHS,
            payload: data
        })
    }

}