import {
  GET_PRODUCTS,
  GET_PRODUCTS_WITH_DISCOUNTS,
  GET_PRODUCTS_PER_PAGE,
  GET_PRODUCT_BY_ID,
  PRODUCT_FORM,
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  CLEAN_DETAIL,
  GET_PRODUCT_STOCK_ID,
  GET_PRODUCT_NAME,
  FILTERS_RESET,
  SAVE_FILTERED_DATA_BY_BRAND,
  SAVE_FILTERED_DATA_BY_CATEGORY,
  RESTORE_DATA,
  GET_PRODUCT_STOCK_SIZE,
  GET_ORDERED_PRODUCTS,
  ORDER_METHOD,
} from "./productsAction";

export const initialState = {
  products: [],
  productsPerPage: [],
  productId: {},
  productForm: {},
  filtrados: [],
  stockById: [],
  stockBySize: [],
  filtros: [],
  dataFiltrada: {},
  productPhoto: [],
};
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      let dayVerify = new Date().toLocaleString("default", { weekday: "long" });
      let data = action.payload;
      data = data.map((el) => {
        if (el.onSale === false) {
          return el;
        } else if (el.discountDay === null) {
          return el;
        } else if (
          el.onSale === true &&
          el.discountDay !== null &&
          el.discountDay !== dayVerify
        ) {
          console.log("SIN DIA. elemento sale normal");

          return {
            ...el,
            onSale: false,
            Discounts: null,
            discountDay: null,
          };
        } else if (
          el.onSale === true &&
          el.discountDay !== null &&
          el.discountDay === dayVerify
        ) {
          return el;
        }
      });
      return {
        ...state,
        products: data,
        filtrados: data,
      }
    }
    case GET_PRODUCTS_PER_PAGE: {
      return {
        ...state,
        productsPerPage: action.payload,
      };
    }

    case GET_ORDERED_PRODUCTS:
      let array = state.products;

      let orderedArray =
        action.payload === "price"
          ? array.sort((a, b) => a.price - b.price)
          : action.payload === "name"
          ? array.sort((a, b) => a.name.localeCompare(b.name))
          : array;

      return {
        ...state,
        products: orderedArray,
      };

    case ORDER_METHOD:
      let array2 = state.products;
      let orderedArray2 =
        action.payload === "asc" && action.order === "price"
          ? array2.sort((a, b) => a.price - b.price)
          : action.payload === "desc" && action.order === "price"
          ? array2.sort((a, b) => b.price - a.price)
          : action.payload === "asc" && action.order === "name"
          ? array2.sort((a, b) => a.name.localeCompare(b.name))
          : action.payload === "desc" && action.order === "name"
          ? array2.sort((a, b) => b.name.localeCompare(a.name))
          : array2;

      return {
        ...state,
        products: orderedArray2,
      };
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
          : productsByBrand.filter((el) => el.Brand.name === action.payload);

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
          : productsByBrand.filter((el) => el.Brand.name !== action.payload);
      return {
        ...state,
        dataFiltrada: {
          ...state.dataFiltrada,
          [action.payload]: filterBrand,
        },
      };
    }

    case FILTER_BY_CATEGORY: {
      let productsByCategory = state.products;

      let filterCategory =
        action.payload === "All"
          ? productsByCategory
          : productsByCategory.filter((el) =>
              Object.values(el.Category).find((e) => e === action.payload)
            );

      return {
        ...state,
        products: filterCategory,
      };
    }
    case SAVE_FILTERED_DATA_BY_CATEGORY: {
      let productsByCategory = state.products;

      let filterCategory =
        action.payload === "All"
          ? productsByCategory
          : productsByCategory.filter(
              (el) =>
                !Object.values(el.Category).find((e) => e === action.payload)
            );

      return {
        ...state,
        dataFiltrada: {
          ...state.dataFiltrada,
          [action.payload]: filterCategory,
        },
      };
    }
    case RESTORE_DATA: {
      if (state.dataFiltrada.hasOwnProperty(action.payload)) {
        let updatedData = (state.products = state.products.concat(
          state.dataFiltrada[action.payload]
        ));
        delete state.dataFiltrada[action.payload];
        return {
          ...state,
          products: updatedData,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case FILTERS_RESET: {
      return {
        ...state,
        products: action.payload,
        filtrados: action.payload,
        filtros: [],
        dataFiltrada: {},
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
    case GET_PRODUCT_STOCK_SIZE:
      return {
        ...state,
        stockBySize: action.payload,
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
