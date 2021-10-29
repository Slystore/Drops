import axios from "axios";

export const GET_USERS = 'GET_USERS'

export const userRegister = async (payload) => {
  try {
    console.log("estoy entrando", payload);
    let { data } = await axios.post(
      "http://localhost:3001/api/register",
      payload
    );
    return data;
  } catch (err) {
    console.log("rompo en la action de user", err);
  }
};


export const userLoginGoogle = async(payload)=>{
  console.log('a ver que me llega de paylaod',payload)
try{
 let {data} = await axios.post('http://localhost:3001/api/googleLogin',payload)
 return data;
}catch(err){
  console.log('rompo en la action de googleLog',err )
}
}

export const userLogin = async (payload) => {
  try {
    let { data } = await axios.post("http://localhost:3001/api/login", payload);
    if (data.token) {
      let token = data.token;
      localStorage.setItem("token", token);
    }

    return data;
  } catch (error) {
    console.log("rompo en el login action", error);
  }
};

export const getUsers = () => {
  return async (dispatch) => {
  try {
      let { data } = await axios.get("http://localhost:3001/api/allUser");
      console.log(data)
      return await dispatch({
        type: GET_USERS,
        payload: data
    })       
    } catch (error) {
    console.log(error)
  }
}
};