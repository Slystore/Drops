import {
 GET_REVIEWS 
    
} from './actions';

export const initialState = {
    reviews: []
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

        
        default:
            return state

    }

}

export default reviewsReducer;