import axios from "axios";

export const GET_USERS = "GET_USERS";

export const GET_USER_ID = "GET_USER_ID";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const GET_USER_WISH = "GET_USER_WISH";

export const userRegister = async (payload) => {
  try {
    console.log("estoy entrando", payload);
    let { data } = await axios.post("/register", payload);
    return data;
  } catch (err) {
    console.log("rompo en la action de user", err);
  }
};

export const userLoginGoogle = async (payload) => {
  console.log("a ver que me llega de paylaod", payload);
  try {
    let data = await axios.post("/googleLogin", payload);
    console.log("data de axios", data);
    return data.data;
  } catch (err) {
    console.log("rompo en la action de googleLog", err);
  }
};

export const userDeleteWish = async (id, productId) => {
  console.log("esta es la id", id);
  console.log("este es el product id ", productId);
  try {
    let { data } = await axios.delete(`/wishList/unWish/${id}/${productId}`);
    return data;
  } catch (err) {
    console.log("rompo en el controlelr de deleteWish", err);
  }
};

export const userPostWish = async (userId, productId) => {
  console.log(userId, productId);
  try {
    let { data } = await axios.post("/wishList/addWish", { userId, productId });
    return data;
  } catch (err) {
    console.log("rompo en la action de postWish", err);
  }
};

export const userWishListGet = (id) => {
  return async function (dispatch) {
    try {
      let { data } = await axios.get(`/wishList/wish/${id}`);
      return await dispatch({
        type: GET_USER_WISH,
        payload: data,
      });
    } catch (error) {
      console.log("rompo action wishGet", error);
    }
  };
};

export const userForgotPass = async (user) => {
  console.log("este es el user ", user);
  try {
    let { data } = await axios.put("/api/forgotPassword", user);
    console.log("a ver que data me llega", data);
    return data;
  } catch (error) {
    console.log("rompo en el forgot", error);
  }
};

export const userLogin = async (payload) => {
  try {
    let { data } = await axios.post("/login", payload);
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
  let data = {};
  let token = localStorage.getItem("token");
  if (!token) {
    let error = {};
    error.msg = "No se ha encontrado ningun token";
    return error;
  }
  return (data.tokenInfo = token);
};

export const editUsers = async (userUpdate, id) => {
  console.log("este es el userUpdate de la action ", userUpdate);
  console.log("este es el id de la action ", id);
  try {
    let { data } = await axios.put(`/edit/${id}`, userUpdate);
    return data;
  } catch (err) {
    console.log("rompo en la action de editUsers", err);
  }
};

export const userNewPass = async (newPass, id) => {
  console.log("este es el user y la id ", newPass, id);
  try {
    let { data } = await axios.put(`/api/newPassword/${id}`, newPass);
    return data;
  } catch (err) {
    console.log("rompo en la action de newPass", err);
  }
};

export const getUserId = (id) => {
  return async function (dispatch) {
    console.log("data de la action", id);
    try {
      console.log("estoy entrando al dispatch?");
      let { data } = await axios.get(`/allUser/${id}`);
      return await dispatch({
        type: GET_USER_ID,
        payload: data,
      });
    } catch (err) {
      console.log("rompo en el getUserId", err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      console.log("hola");
      let nada = await axios.get("/allUser");
      console.log("esto trae el back a la action", nada.data.users);
      return await dispatch({
        type: GET_USERS,
        payload: nada.data.users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersByName = (payload) => {
  return async (dispatch) => {
    try {
      console.log(payload);
      return await dispatch({
        type: GET_USERS_BY_NAME,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
