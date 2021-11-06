import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const STORAGE= 'STORAGE';
export const FILL_CART_STORAGE = 'FILL_CART_STORAGE'
export const INCREMENT_CART_STORAGE='INCREMENT_CART_STORAGE';
export const DECREMENT_CART_STORAGE='DECREMENT_CART_STORAGE';
export const CLEAR_CART = ' CLEAR_CART'
export const RECOVERY_CART= 'RECOVERY_CART'
export const DELETE_ITEM_CART_STORAGE= 'DELETE_ITEM_CART_STORAGE'

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export function getProducts(pagina){
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/products`)
            return await dispatch({
                type: GET_PRODUCTS,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }
    }
}

export function storage(payload) {
    return {
        type: STORAGE,
        payload
    }
}

export function fillCartStorage(payload) {
    return {
        type: FILL_CART_STORAGE,
        payload
    }
}

export function incrementCartStorage(id) {
    return {
        type: INCREMENT_CART_STORAGE,
        payload: id
    }
}

export function decrementCartStorage(id) {
    return {
        type: DECREMENT_CART_STORAGE,
        payload: id
    }
}

export function clearCart(id) {
    return {
        type: CLEAR_CART,
        payload: id
    }
}

export function recoveryCart(payload) {
    return {
        type: RECOVERY_CART,
        payload
    }
}

export function deleteItemCartStorage(id) {
    return {
        type: DELETE_ITEM_CART_STORAGE,
        payload: id
    }
}