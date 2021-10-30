import axios from "axios";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIE_BY_ID = "GET_CATEGORIE_BY_ID";
export const POST_CATEGORIE = "POST_CATEGORIE";


export function getCategories(){
    return async (dispatch) => {
        const categories = await axios.get('http://localhost:3001/api/Categories')
        return await dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        })
    }

}
export function getCategoryById(id){
    return async (dispatch) => {
        const categories = await axios.get(`http://localhost:3001/api/Categories/${id}`)
        return await dispatch({
            type: GET_CATEGORIE_BY_ID,
            payload: categories.data
        })
    }

}

export function postCategory(payload) {
    return async(dispatch) => {
        const json = await axios.post(`/api/categories/create`, payload)
        return await dispatch({
            type: POST_CATEGORIE,
            payload: json.data
        })
    }
}
