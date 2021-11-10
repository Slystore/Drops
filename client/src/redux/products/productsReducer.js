import {
  GET_PRODUCTS,
  GET_ORDERED_PRODUCTS,
//   GET_ALL,
  GET_PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_ID,
  PRODUCT_FORM,
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  CLEAN_DETAIL,
  GET_PRODUCT_STOCK_ID,
  GET_PRODUCT_NAME,
  FILTERS_RESET,
  FILTER_BY_PRICE,
  SAVE_FILTERED_DATA_BY_BRAND,
  SAVE_FILTERED_DATA_BY_CATEGORY,
  RESTORE_DATA
} from "./productsAction";

export const initialState = {
  products: [],
  productsPerPage: [],
  productId: {},
  productForm: {},
  filtrados: [],
  stockById: [],
  filtros: [],
  dataFiltrada: {}
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        filtrados: action.payload,
      };
    }

    case GET_PRODUCTS_PER_PAGE: {
      return {
        ...state,
        productsPerPage: action.payload,
      };
    }

    // case GET_ORDERED_PRODUCTS: {
    //   console.log(action.payload)
    //   let orderArray = state.products
      
    //   action.payload === 'desc' ?
    //   orderArray = orderArray.sort( (a,b) => {
    //     if(a.id < b.id) return -1
    //     else if(a.id > b.id)  return 1
    //     else return 0 
    //   })
    //  : 
    //   orderArray = orderArray.sort( (a,b) => b.name - a.name );

    //   return {
    //     ...state,
    //     products: orderArray,
    //   };
    // }
    case GET_PRODUCT_BY_ID: {
      return {
        ...state,
        productId: action.payload,
      };
    }

    case PRODUCT_FORM: {
      return {
        ...state,
        productForm: action.payload,
      };
    }

    case FILTER_BY_BRAND: {
      let productsByBrand = state.products;
      
     
        let filterBrand =
        action.payload === "All"
          ? productsByBrand
          : productsByBrand.filter((el) =>
              el.Brand.name === action.payload
            );
        
        return {
          ...state,
          products: filterBrand,
        };
      }

    case SAVE_FILTERED_DATA_BY_BRAND: {
      let productsByBrand = state.products;
      
      
        let filterBrand =
        action.payload === "All"
          ? productsByBrand
          : productsByBrand.filter((el) =>
              el.Brand.name !== action.payload
            );
            console.log(filterBrand)
            console.log(state.filtros.length)
        
        return {
          ...state,
          dataFiltrada: {
            ...state.dataFiltrada,
            [action.payload]: filterBrand
          }
        };
      }

    case FILTER_BY_CATEGORY: {
       let productsByCategory = state.products;
      
        let filterCategory =
        action.payload === "All"
          ? productsByCategory
          : productsByCategory.filter((el) =>
              Object.values(el.Category).find(e => e === action.payload)
            );
        
        return {
          ...state,
          products: filterCategory
        };
      }
    case SAVE_FILTERED_DATA_BY_CATEGORY: {
       let productsByCategory = state.products;
      
        let filterCategory =
        action.payload === "All"
          ? productsByCategory
          : productsByCategory.filter((el) =>
              !Object.values(el.Category).find(e => e === action.payload)
            );
        
        return {
          ...state,
          dataFiltrada: {
            ...state.dataFiltrada,
            [action.payload]: filterCategory
          }
        };
      }
    case RESTORE_DATA: {
      if(state.dataFiltrada.hasOwnProperty(action.payload)) {
        let updatedData = state.products = state.products.concat(state.dataFiltrada[action.payload])
        delete state.dataFiltrada[action.payload]
        return {
          ...state,
          products: updatedData
        }
      } else {
        return {
          ...state
        }
      }
    }
    
    case FILTER_BY_PRICE: {
       let productsByPrice = state.filtrados;
      
      if(state.filtros.length === 0){// Si no hay filtros aplicados previamente
        let filterPrice =
        action.payload === "1"
          ? productsByPrice
          : productsByPrice.filter((el) =>
              el.price > parseInt(action.payload)
            );
        state.filtros = [...filterPrice]
        return {
          ...state,
          products: state.filtros,
        };
      }
      else {// Si ya hay filtros aplicados
        let filterPrice2 =
        action.payload === "1"
          ? state.filtros
          : state.filtros.filter((el) =>
              el.price > parseInt(action.payload)
            );
            state.filtros = [...filterPrice2]
            return {
              ...state,
              products: state.filtros,
            };
      }
    }
    case FILTERS_RESET: {
      
        return {
          ...state,
          products: action.payload,
          filtrados: action.payload,
          filtros: [],
          dataFiltrada: {}
        };
      }
      
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case GET_PRODUCT_STOCK_ID:
      return {
        ...state,
        stockById: action.payload,
      };
    case GET_PRODUCT_NAME:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
