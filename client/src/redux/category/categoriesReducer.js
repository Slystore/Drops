
import { GET_CATEGORIES, GET_CATEGORIE_BY_ID, POST_CATEGORIE } from './categoriesActions';
   
export const initialState = {
    categories: [],
    categoryById: {}
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
            case GET_CATEGORIE_BY_ID:
               {
                   return {
                       ...state,
                       categoryById: {
                           ...action.payload
                        },
                   }
               }
            case POST_CATEGORIE:
               {
                   return {
                       ...state
                   }
               }
               default:
                   return state
       }
   }
   
   export default categoriesReducer;