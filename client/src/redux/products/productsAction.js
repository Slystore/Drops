import axios from "axios";

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_PER_PAGE = 'GET_PRODUCTS_PER_PAGE'
export const GET_PRODUCT_BY_ID = 'GET_REVIEWS_BY_USER'
export const PRODUCT_FORM = 'PRODUCT_FORM'

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

export function getProductsById(id){
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/products/${id}`)
            return await dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }   
    }
}

export function productForm(form){
    return async(dispatch) => {
        return await dispatch({
            type: PRODUCT_FORM,
            payload: form
        })
    }
}
export const postProduct = async(payload) => {
    const token = localStorage.getItem("token");
    // console.log("this", payload);
    let prueba=""
    // const config = { headers: { Authorization: `Bearer ${token1}` }   };
// const bodyParameters = { key: prueba };
    try {
        const res = await axios.post(
            `/api/products/createProduct`, { prueba }, {
                headers: {
                    authorization: token,
                },
            }
        );
        console.log("post product action despachada!");
        return res;
    } catch (err) {
        console.log("yo rompo action", err);
    }
    // const back = axios.post( 'http://localhost:3001/api/products/createProduct', prueba)
};