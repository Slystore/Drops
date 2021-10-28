import axios from "axios";

export function postCategory(payload) {
    return async() => {
        const json = await axios.post(`/api/categories/create`, payload)
        return json
    }
}