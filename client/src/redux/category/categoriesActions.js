import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIE_BY_ID = "GET_CATEGORIE_BY_ID";
export const POST_CATEGORIE = "POST_CATEGORIE";


export function getCategories() {
    return async (dispatch) => {
        const categories = await axios.get('/Categories')
        return await dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        })
    }

}
export function getCategoryById(id) {
    return async (dispatch) => {
        const categories = await axios.get(`/Categories/${id}`)
        return await dispatch({
            type: GET_CATEGORIE_BY_ID,
            payload: categories.data
        })
    }

}
export async function postCategory(payload) {
    const json = await axios.post(`/Categories/createCategory`, payload)
    return json
}
export async function PutCategory(payload) {
    const json = await axios.put(`/Categories/editCategory`, payload)
    return json
}
