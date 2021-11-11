import { TYPES } from "./ratingActions";

export const initialState = {
  ratings: [],
  bestRatings: []
};

function ratingReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_RATINGS: {
      return {
        ...state,
        ratings: action.payload,
      };
    }
    
    default:
      return state;
  }
}

export default ratingReducer;
