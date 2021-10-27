import axios from 'axios'

export const GET_REVIEWS = 'GET_REVIEWS'

export function getReviews(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/reviews')
        return await dispatch({
            type: GET_REVIEWS,
            payload: data
        })
    }

}