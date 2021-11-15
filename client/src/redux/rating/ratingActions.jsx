import axios from 'axios';

export const TYPES = {
    SET_RATING: 'SET_RATING',
    GET_RATINGS: 'GET_RATINGS',
    GET_RATINGS_BY_ID: 'GET_RATINGS_BY_ID',
    SORT_RATINGS: 'SORT_RATINGS'

}

export function getRatings(){
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`/products`)
            data = data.map(el => {
                return {
                    ...el,
                    rating: el.Reviews?.map(e => e.rating).reduce( (acc, num) => acc + num, 0 )/el.Reviews.length
                }
            })
            return await dispatch({
                type: TYPES.GET_RATINGS,
                payload: data
            })    
        } catch (error) {
            console.log(error)
        }
    }
}
export function getBestRatings(){
    return async (dispatch) => {
        console.log('hola')
        try {
            return await dispatch({
                type: TYPES.SORT_RATINGS
            })    
        } catch (error) {
            console.log(error)
        }
    }
}

