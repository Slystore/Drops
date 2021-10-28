import axios from "axios";

export function postBrand(payload) {
    return async() => {
        const json = await axios.post(`/api/brand/create`, payload)
        return json
    }
}