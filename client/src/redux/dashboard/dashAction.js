import axios from "axios";
  //  let usersCount= await axios.get('/countUser');
    //  console.log(usersCount.data.users);
    export const GET_USERS_COUNT = "GET_USERS_COUNT";

    export function getUsersCount() {
        return async (dispatch) => {
          const { data } = await axios.get('/countUser')
          return await dispatch({
            type: GET_USERS_COUNT,
            payload: data
          })
        }
      
      }