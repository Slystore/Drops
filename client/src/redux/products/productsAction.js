import axios from "axios";


export const postProduct = async(payload) => {
    const token = localStorage.getItem("token");
    // console.log("this", payload);
    let prueba=""
    // const config = { headers: { Authorization: `Bearer ${token1}` }   };
// const bodyParameters = { key: prueba };
    try {
        const res = await axios.post(
            `/api/movies/createMovie`, { prueba }, {
                headers: {
                    authorization: token,
                },
            }
        );
        console.log("post movie action despachada!");
        return res;
    } catch (err) {
        console.log("yo rompo action", err);
    }
    // const back = axios.post( 'http://localhost:3001/api/movies/createMovie', prueba)
};