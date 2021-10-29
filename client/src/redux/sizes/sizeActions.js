import axios from "axios";

export const GET_SIZES = 'GET_SIZES'

export function getSizes(){
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/api/sizes')
        return await dispatch({
            type: GET_SIZES,
            payload: data
        })
    }

}
