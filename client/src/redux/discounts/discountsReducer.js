
import { GET_DISCOUNTS } from './discountsActions';
  
export const initialState = {
    discounts: []
  };


 function discountsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DISCOUNTS: {
        
        return {
          ...state,
          discounts: [
              ...state.discounts,
              action.payload
          ]
        };
      }
      default:
        return state;
    }
  }
  
  export default discountsReducer;
  