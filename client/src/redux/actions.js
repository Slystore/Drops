import axios from 'axios'

export const GET_REVIEWS = 'GET_REVIEWS'
export const GET_REVIEW_BY_ID = 'GET_REVIEWS_BY_ID'
export const GET_REVIEWS_BY_USER = 'GET_REVIEWS_BY_USER'
export const GET_REVIEWS_BY_PRODUCT = 'GET_REVIEWS_BY_PRODUCT'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const POST_REVIEW = 'POST_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'

export const GET_USERS = 'GET_USERS'
export const GET_ORDERS = 'GET_ORDERS'
export const GET_WISH_LISTS = 'GET_WISH_LISTS'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_BRANDS = 'GET_BRANDS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_BRANCHS = 'GET_BRANCHS'

//Reviews

export function getReviews(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/reviews')
        return await dispatch({
            type: GET_REVIEWS,
            payload: data
        })
    }

}

export function getReviewById(id){
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/api/reviews/${id}`)
        return await dispatch({
            type: GET_REVIEW_BY_ID,
            payload: data
        })
    }

}

export function getReviewsByUser(userMail){
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/api/reviews?user=${userMail}`)
        return await dispatch({
            type: GET_REVIEWS_BY_USER,
            payload: data
        })
    }

}

export function getReviewsByProduct(productId){
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/api/reviews?product=${productId}`)
        return await dispatch({
            type: GET_REVIEWS_BY_PRODUCT,
            payload: data
        })
    }

}

export function deleteReview(id){
    return async (dispatch) => {
        const { data } = await axios.delete(`http://localhost:3001/api/reviews/delete/${id}`)
        return await dispatch({
            type: DELETE_REVIEW,
            payload: data
        })
    }

}

export function createReview({comment, rating, user}){
    return async (dispatch) => {
        const { data } = await axios.post(`http://localhost:3001/api/reviews/create/`, {comment, rating, user})
        return await dispatch({
            type: POST_REVIEW,
            data
        })
    }

}

export function updateReview({id, comment, rating }){
    return async (dispatch) => {
        const { data } = await axios.put(`http://localhost:3001/api/reviews/update/${id}`, { comment, rating })
        return await dispatch({
            type: UPDATE_REVIEW,
            data
        })
    }

}
//Users

export function getUsers(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/users')
        return await dispatch({
            type: GET_USERS,
            payload: data
        })
    }

}

//Orders

export function getOrders(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/orders')
        return await dispatch({
            type: GET_ORDERS,
            payload: data
        })
    }

}

//Wish Lists

export function getWishList(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/wishlist')
        return await dispatch({
            type: GET_WISH_LISTS,
            payload: data
        })
    }

}

//Products

export function getProducts(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/products')
        return await dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }

}

//Brands

export function getBrands(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/brands')
        return await dispatch({
            type: GET_BRANDS,
            payload: data
        })
    }

}

//Category

export function getCategories(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/category')
        return await dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    }

}

//Branch

export function getBranchs(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/branch')
        return await dispatch({
            type: GET_BRANCHS,
            payload: data
        })
    }

}