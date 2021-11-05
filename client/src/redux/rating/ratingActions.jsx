import axios from 'axios';

export const TYPES = {
    SET_RATING: 'SET_RATING',
    GET_RATINGS: 'GET_RATINGS',
    GET_RATINGS_BY_ID: 'GET_RATINGS_BY_ID',

}

export function getRatings(){
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`http://localhost:3001/api/products`)
            data = data.map(el => {
                return {
                    ...el,
                    rating: el.Reviews?.map(e => e.rating).reduce( (acc, num) => acc + num, 0 )/el.Reviews.length
                }
            })
            console.log(data)
            return await dispatch({
                type: TYPES.GET_RATINGS,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }
    }
}

