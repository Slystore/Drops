import axios from "axios";
export const GET_BRANDS = "GET_BRANDS";
export const GET_BRAND_BY_ID = "GET_BRAND_BY_ID";


export async function postBrand(payload) {
    const json = await axios.post(`http://localhost:3001/api/brands/create`, payload)
    return json
}

export function getBrands() {
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/brands/getAllBrands')
        return await dispatch({
            type: GET_BRANDS,
            payload: data
        })
    }

}

export function getBrandById(id) {
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/api/brands/getOneBrand/${id}`)
        return await dispatch({
            type: GET_BRAND_BY_ID,
            payload: data
        })
    }

}