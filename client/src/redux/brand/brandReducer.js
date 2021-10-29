
import { GET_BRANDS } from './brandActions';
   
export const initialState = {
    brands: []
};
   
   function brandsReducer(state = initialState, action) {
       switch (action.type) {
           case GET_BRANDS:
               {
                   return {
                       ...state,
                       brands: action.payload,
                   }
               }
   
               default:
                   return state
   
       }
   
   }
   
   export default brandsReducer;