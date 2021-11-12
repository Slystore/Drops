import { GET_USERS, GET_USER_ID, GET_USERS_BY_NAME,GET_USER_WISH } from "./userActions";

export const initialState = {
  users: [],
  userId: [],
  wishList:[],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WISH:{
      return{
        ...state,
        wishList:action.payload
      }
    }

    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER_ID: {
      return {
        ...state,
        userId: action.payload,
      };
    }

    case GET_USERS_BY_NAME: {
      let data = state.users
      console.log(data)

      let filteredData = action.payload !== '' ? data.filter(e => e.name.toLowerCase().includes(action.payload) || e.surname.toLowerCase().includes(action.payload)) : data
     
      console.log(action.payload, filteredData)
      return {
        ...state,
        users: filteredData
      };
    }
    default:
      return state;
  }
}

export default usersReducer;
