import { GET_BRANDS } from "./brandActions";

const initialState = {
    brands: []
};

function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            {
                return {
                    ...state,
                    brands: action.payload
                }
            }
         default:
            return state;
    }
}
export default brandReducer;