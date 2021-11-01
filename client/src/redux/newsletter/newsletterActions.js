import axios from "axios";

export const POST_NEWSLETTER = "POST_NEWSLETTER";


export const postNewsletter = (payload) => {  
    return async (dispatch) => {
        try {
            const res = await axios.post(`http://localhost:3001/api/newsletter/subscribe`, payload );
            return await dispatch({
                type: POST_NEWSLETTER,
                payload: res
            })
        } catch (err) {
            console.log( err);
        }
    }
};