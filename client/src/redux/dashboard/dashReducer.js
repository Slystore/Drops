import { GET_USERS_COUNT} from './dashAction';
   
export const initialState = {
    usersCount: [],
  
};
   
   function dashReducer(state = initialState, action) {
       switch (action.type) {
           case GET_USERS_COUNT:
               {
                   return {
                       ...state,
                       usersCount: action.payload,
                   }
               }
               default:
                return state

    }

}

export default dashReducer;