
import { GET_SIZES } from './sizeActions';
   
export const initialState = {
    sizes: []
};
   
   function sizeReducer(state = initialState, action) {
       switch (action.type) {
           case GET_SIZES:
               {
                   return {
                       ...state,
                       sizes: action.payload,
                   }
               }
   
               default:
                   return state
   
       }
   
   }
   
   export default sizeReducer;