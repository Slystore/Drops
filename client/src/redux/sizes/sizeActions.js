import axios from "axios";

export const GET_SIZES = 'GET_SIZES'

export function getSizes(){
    return async (dispatch) => {
        const { data } = await axios.get('/sizes')
        return await dispatch({
            type: GET_SIZES,
            payload: data
        })
    }

}
