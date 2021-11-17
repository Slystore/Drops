import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";

export async function sendMail(email, data) {
    console.log('entra a la action')
  
        const info = await axios.post('/mail/send', {email, data})
        return info
}

