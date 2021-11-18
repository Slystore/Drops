import axios from "axios";

export const POST_NEWSLETTER = "POST_NEWSLETTER";


export const postNewsletter = (payload) => { 
    console.log('entrando a newsletter', payload) 
    return async () => {
        try {
            const res = await axios.post(`/newsletter/subscribe`, payload );
            return res
        } catch (err) {
            console.log( err);
        }
    }
};

export const deleteNewsletter = (payload) => {  
    return async () => {
        try {
            const res = await axios.post(`/newsletter/unsubscribe`, payload );
            return res
            
        } catch (err) {
            console.log( err);
        }
    }
};