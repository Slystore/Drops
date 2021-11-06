import axios from "axios";

export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCT_STOCK_ID="GET_PRODUCT_STOCK_ID";
export const GET_PRODUCT_NAME = "GET_PRODUCT_NAME";
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_PER_PAGE = 'GET_PRODUCTS_PER_PAGE'
export const GET_PRODUCT_BY_ID = 'GET_REVIEWS_BY_USER'
export const FILTER_BY_BRAND = " FILTER_BY_BRAND";
export const FILTER_BY_CATEGORY = " FILTER_BY_CATEGORY";
export const FILTER_BY_PRICE = " FILTER_BY_PRICE";
export const FILTERS_RESET = " FILTERS_RESET";
export const PRODUCT_FORM = 'PRODUCT_FORM'
export const GET_ALL = "GET_ALL";


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
            console.log('estoy disparando la action ',data)
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
        const { data } = await axios.post(`http://localhost:3001/api/products/createProduct`, form)
        return await dispatch({
            type: PRODUCT_FORM,
            payload: data
        })
    }
}
//         const products = await axios.get('http://localhost:3001/api/products')
//         const categories = await axios.get(`http://localhost:3001/api/Categories`);
//         const brands = await axios.get(`http://localhost:3001/api/brands`);
     

//         return await dispatch({
//             type: GET_ALL,
//             products: products.data,
//             categories: categories.data,
//             brands: brands.data
//         });
//     };
// }




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

export function filterBrand(payload) {
    return {
        type: FILTER_BY_BRAND,
        payload,
    };
}
export function filterCategory(payload) {
    return {
        type: FILTER_BY_CATEGORY,
        payload,
    };
}

export function filterPrice(payload) {
    return {
        type: FILTER_BY_PRICE,
        payload,
    };
}

export function filtersReset() {
    return getProducts()
}

export function cleanDetail (payload){
    return {
        type: CLEAN_DETAIL,
        payload
    }
}
export function getProductStockById(id){
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/productSizes/${id}`)
            return await dispatch({
                type: GET_PRODUCT_STOCK_ID,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }   
    }
}
export function getProductsByName(payload) {
    return async function(dispatch) {
        try {
            let response = await axios.get(
                `http://localhost:3001/api/products?name=` + payload
            );
            return dispatch({
                type: GET_PRODUCT_NAME,
                payload: response.data,
            });
        } catch (error) {
            alert("Producto no encontrado");
        }
    };
}