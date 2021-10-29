import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";

export function getCategories(){
    return async (dispatch) => {
        const categories = await axios.get('http://localhost:3001/api/Categories')
        return await dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        })
    }

}
export function postCategory(payload) {
    return async() => {
        const json = await axios.post(`/api/categories/create`, payload)
        return json
    }
}