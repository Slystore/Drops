
import { GET_BRANDS, GET_BRAND_BY_ID } from './brandActions';
   
export const initialState = {
    brands: [],
    brandById: {}
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
           case GET_BRAND_BY_ID:
               {
                   return {
                       ...state,
                       brandById: action.payload,
                   }
               }
   
               default:
                   return state
   
       }
   
   }
   
   export default brandsReducer;

