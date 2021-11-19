import axios from "axios";

export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCT_STOCK_ID = "GET_PRODUCT_STOCK_ID";
export const GET_PRODUCT_STOCK_SIZE = "GET_PRODUCT_STOCK_SIZE";
export const GET_PRODUCT_NAME = "GET_PRODUCT_NAME";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_WITH_DISCOUNTS = "GET_PRODUCTS_WITH_DISCOUNTS";
export const GET_ORDERED_PRODUCTS = "GET_ORDERED_PRODUCTS";
export const ORDER_METHOD = "ORDER_METHOD";
export const GET_PRODUCTS_PER_PAGE = "GET_PRODUCTS_PER_PAGE";
export const GET_PRODUCT_BY_ID = "GET_REVIEWS_BY_USER";
export const FILTER_BY_BRAND = " FILTER_BY_BRAND";
export const FILTER_BY_CATEGORY = " FILTER_BY_CATEGORY";
export const SAVE_FILTERED_DATA_BY_CATEGORY = " SAVE_FILTERED_DATA_BY_CATEGORY";
export const SAVE_FILTERED_DATA_BY_BRAND = " SAVE_FILTERED_DATA_BY_BRAND";
export const RESTORE_DATA = " RESTORE_DATA";
export const FILTERS_RESET = " FILTERS_RESET";
export const PRODUCT_FORM = "PRODUCT_FORM";
export const ADD_PRODUCT_PHOTO = "ADD_PRODUCT_PHOTO";

export function getProducts(dayDiscount) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products`);
      return await dispatch({
        type: GET_PRODUCTS,
        payload: data,
        dayDiscount,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsWithDiscounts(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/products/discount`, payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateDiscountById(payload) {
  let { id } = payload;
  return async () => {
    try {
      const { data } = await axios.put(`/products/discount/${id}`, payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function unSubscribeDiscountById(payload) {
  return async () => {
    try {
      const { data } = await axios.put(`/products/${payload}/discountOff`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderProducts(payload) {
  return async (dispatch) => {
    return await dispatch({
      type: GET_ORDERED_PRODUCTS,
      payload,
    });
  };
}

export function orderMethod(payload, order) {
  return async (dispatch) => {
    return await dispatch({
      type: ORDER_METHOD,
      payload,
      order,
    });
  };
}

export function getProductsById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      return await dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function productForm(form) {
  return async (dispatch) => {
    const { data } = await axios.post(`/products/createProduct`, form);
    return data;
  };
}

export const postProduct = async (payload) => {
  const token = localStorage.getItem("token");
  let prueba = "";
  try {
    const res = await axios.post(
      `/products/createProduct`,
      { prueba },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  } catch (err) {
    console.log("yo rompo action", err);
  }
};

export function filterBrand(payload) {
  return async (dispatch) => {
    try {
      return await dispatch({
        type: FILTER_BY_BRAND,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterCategory(payload) {
  return async (dispatch) => {
    try {
      return await dispatch({
        type: FILTER_BY_CATEGORY,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function saveFilteredDataCategory(payload) {
  return async (dispatch) => {
    try {
      return await dispatch({
        type: SAVE_FILTERED_DATA_BY_CATEGORY,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function saveFilteredDataBrand(payload) {
  return async (dispatch) => {
    try {
      return await dispatch({
        type: SAVE_FILTERED_DATA_BY_BRAND,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function restoreData(payload) {
  return async (dispatch) => {
    try {
      return await dispatch({
        type: RESTORE_DATA,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filtersReset() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/products`);
      return await dispatch({
        type: FILTERS_RESET,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanDetail(payload) {
  return {
    type: CLEAN_DETAIL,
    payload,
  };
}
export function getProductStockById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/productSizes/${id}`);
      return await dispatch({
        type: GET_PRODUCT_STOCK_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProductsByName(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`/products?name=` + payload);
      return dispatch({
        type: GET_PRODUCT_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("Producto no encontrado");
    }
  };
}
export function getProductStockBySize(id, body) {
  return async (dispatch) => {
    try {
      let info = { SizeId: body.SizeId };
      const data = await axios.get(`/productSizes/stockBySize/${id}`, info);
      return await dispatch({
        type: GET_PRODUCT_STOCK_SIZE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function PutProduct(payload) {
  return async () => {
    const { data } = axios.put(`/products/updateProduct/`, payload);
    return data;
  };
}


