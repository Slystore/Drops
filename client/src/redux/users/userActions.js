import axios from "axios";

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
