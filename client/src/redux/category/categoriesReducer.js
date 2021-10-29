
import { GET_CATEGORIES } from './categoriesActions';
   
export const initialState = {
    categories: []
};
   
   function categoriesReducer(state = initialState, action) {
       switch (action.type) {
           case GET_CATEGORIES:
               {
                   return {
                       ...state,
                       categories: action.payload,
                   }
               }
   
               default:
                   return state
   
       }
   
   }
   
   export default categoriesReducer;