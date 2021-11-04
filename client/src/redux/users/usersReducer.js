import { GET_USERS, GET_USER_ID } from "./userActions";

export const initialState = {
  users: [],
  userId: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER_ID: {
      console.log('esta es la dat del reducer',action.payload)
      return {
        ...state,
        userId: action.payload,
      };
    }
    default:
      return state;
  }
}

export default usersReducer;
