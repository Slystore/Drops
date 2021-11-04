import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER_ID = 'GET_USER_ID'

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

export const userLoginGoogle = async (payload) => {
  console.log("a ver que me llega de paylaod", payload);
  try {
    let { data } = await axios.post(
      "http://localhost:3001/api/googleLogin",
      payload
    );
    return data;
  } catch (err) {
    console.log("rompo en la action de googleLog", err);
  }
};

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
export const getToken = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    let error = {};
    error.msg = "No se ha encontrado ningun token";
    return error;
  }
  return token;
};

export const editUsers = async(userUpdate) =>{
  console.log('este es el userUpdate de la action ',userUpdate)
  try{
    let id = userUpdate.id
    let {data} = await axios.put(`http://localhost:3001/api/edit/12`,userUpdate)
    return data 
  }catch(err){
    console.log('rompo en la action de editUsers',err)
  }
}

export const getUserId = (id)=>{
  return async function(dispatch){
    console.log('data de la action',id)
    try{
      let {data} = await axios.get(`http://localhost:3001/api/allUser/${id}`)
      return await dispatch({
        type:GET_USER_ID,
        payload:data
      })
    }catch(err){
      console.log('rompo en el getUserId',err)
    }
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("http://localhost:3001/api/allUser");
      console.log(data);
      return await dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
