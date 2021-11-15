import axios from "axios";

export const GET_DISCOUNTS = "GET_DISCOUNTS";

export function getDiscounts() {
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/discounts`)

                return await dispatch({
                    type: GET_DISCOUNTS,
                    payload: data,
                })

            
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDiscountsByQuantity(payload) {
    
    return async (dispatch) => {
        try {
                const { data } = await axios.post(`/discounts/create`, payload)
                return data
            }
          
         catch (error) {
            console.log(error)
        }
    }
}