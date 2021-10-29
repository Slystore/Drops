import {
 GET_REVIEWS, 
 GET_REVIEW_BY_ID, 
 GET_REVIEWS_BY_PRODUCT, 
 GET_REVIEWS_BY_USER, 
 POST_REVIEW, 
 UPDATE_REVIEW, 
 DELETE_REVIEW 

    
} from './reviewsActions';

export const initialState = {
    reviews: [],
    reviewId: [],
    reviewsUser: [],
    reviewsProduct: [],
    reviewForm: {}
};

function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            {
                return {
                    ...state,
                    reviews: action.payload,
                }
            }

            case GET_REVIEW_BY_ID:
            {
                return {
                    ...state,
                    reviewId: action.payload,
                }
            }
            case GET_REVIEWS_BY_PRODUCT:
                {
                    return {
                        ...state,
                        reviewsProduct: action.payload,
                    }
                }
            case GET_REVIEWS_BY_USER:
            {
                return {
                    ...state,
                    reviewsUser: action.payload,
                }
            }
            case POST_REVIEW:
            {
                return { ...state }
            }
            case DELETE_REVIEW:
            {
                return { ...state }
            }
            case UPDATE_REVIEW:
            {
                return { ...state }
            }
            default:
                return state

    }

}

export default reviewsReducer;