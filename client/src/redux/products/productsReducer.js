import {
    GET_PRODUCTS,
    GET_PRODUCTS_PER_PAGE,
    GET_PRODUCT_BY_ID,
    PRODUCT_FORM
   } from './productsAction';
   
   export const initialState = {
       products: [],
       productsPerPage: [],
       productId: {},
       productForm: {}
   };
   
   function productsReducer(state = initialState, action) {
       switch (action.type) {
           case GET_PRODUCTS:
               {
                   return {
                       ...state,
                       products: action.payload,
                   }
               }
   
               case GET_PRODUCTS_PER_PAGE:
               {
                   return {
                       ...state,
                       productsPerPage: action.payload,
                   }
               }
               case GET_PRODUCT_BY_ID:
               {
                   return {
                       ...state,
                       productId: action.payload,
                   }
               }
               case PRODUCT_FORM:
               {
                   return {
                       ...state,
                       productForm: action.payload,
                   }
               }
              
               default:
                   return state
   
       }
   
   }
   
   export default productsReducer;