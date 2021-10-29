
import {
    GET_PRODUCTS,
    GET_PRODUCTS_PER_PAGE,
    GET_PRODUCT_BY_ID,
    PRODUCT_FORM,
  FILTER_BY_BRAND, 
  FILTER_BY_CATEGORY
   } from './productsAction';
   
   export const initialState = {
       products: [],
       productsPerPage: [],
       productId: {},
       productForm: {},
      filtrados: []
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
             case FILTER_BY_BRAND:{
                let productsByBrand = state.filtrados;
    
                let filterBrand = action.payload === 'All' ? productsByBrand : productsByBrand.filter(el => el.Brand.name.includes(action.payload))
    
                return {
                    ...state,
                    products: filterBrand
                }
            }
            case FILTER_BY_CATEGORY:{
                let productsByCategory = state.filtrados;
    
                let filterCategory = action.payload === 'All' ? productsByCategory : productsByCategory.filter(el => el.Category.name.includes(action.payload))
    
                return {
                    ...state,
                    products: filterCategory
                }
            }
              
               default:
                   return state
   
       }
   
   }
   
   export default productsReducer;

