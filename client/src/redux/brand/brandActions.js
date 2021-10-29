import axios from "axios";

export const GET_BRANDS = 'GET_BRANDS'

export function postBrand(payload) {
    return async() => {
        const json = await axios.post(`/api/brand/create`, payload)
        return json
    }
}

export function getBrands(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/brands')
        return await dispatch({
            type: GET_BRANDS,
            payload: data
        })
    }

}