import axios from "axios";

export const GET_REVIEWS = "GET_REVIEWS";
export const GET_REVIEW_BY_ID = "GET_REVIEWS_BY_ID";
export const GET_REVIEWS_BY_USER = "GET_REVIEWS_BY_USER";
export const GET_REVIEWS_BY_PRODUCT = "GET_REVIEWS_BY_PRODUCT";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const POST_REVIEW = "POST_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export function getReviews(pagina) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/reviews?size=10&page=${pagina}`);
      return await dispatch({
        type: GET_REVIEWS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/reviews/${id}`);
      return await dispatch({
        type: GET_REVIEW_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewsByUser(userMail) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/reviews?user=${userMail}`);
      return await dispatch({
        type: GET_REVIEWS_BY_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewsByProduct(productId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/reviews?product=${productId}`);
      return await dispatch({
        type: GET_REVIEWS_BY_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteReview(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/reviews/delete/${id}`);
      return await dispatch({
        type: DELETE_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export async function createReview(user, coment, productId) {
  let { comment, rating } = coment;
  console.log('este es mi productId',productId)

  try {
    const { data } = await axios.post(`/reviews/create/`, {
      comment,
      rating,
      user,
      productId,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function updateReview({ id, comment, rating }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/reviews/update/${id}`, {
        comment,
        rating,
      });
      return await dispatch({
        type: UPDATE_REVIEW,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
