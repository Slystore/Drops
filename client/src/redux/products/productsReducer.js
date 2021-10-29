import { GET_PRODUCTS, GET_ALL, FILTER_BY_BRAND, FILTER_BY_CATEGORY,
     GET_PRODUCTS_ID, CLEAN_DETAIL } from "./productsAction";

const initialState = {
    products: [],
    filtrados: [],
    categories: [],
    brands: [],
    detail: []
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        // case GET_ALL:
        //     {
        //         return {
        //             ...state,
        //             products: action.products,
        //             filtrados: action.products,
        //             categories: action.categories,
        //             brands: action.brands
        //         }
        //     }
        case GET_PRODUCTS:
            {
                return {
                    ...state,
                    products: action.payload,
                    filtrados: action.payload
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
            case GET_PRODUCTS_ID:

                return {
                    ...state,
                    detail: action.payload,
                }
                case CLEAN_DETAIL:
                    return {
                        ...state,
                        detail: []
                    }    
         default:
            return state;
    }
}
export default productsReducer;