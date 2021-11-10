
import { GET_BRANDS, GET_BRAND_BY_ID, GET_BRANDS_BY_NAME } from './brandActions';
   
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
           case GET_BRANDS_BY_NAME:
               {
                let data = state.brands
          
                let filteredData = action.payload !== '' ? data.filter(e => e.name.toLowerCase().includes(action.payload) ) : data
               
                return {
                  ...state,
                  brands: filteredData
                };
               }
   
               default:
                   return state
   
       }
   
   }
   
   export default brandsReducer;

