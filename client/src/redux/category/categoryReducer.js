import { GET_CATEGORIES } from "./categoriesActions";

const initialState = {
    categories: []
};

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            {
                return {
                    ...state,
                    categories: action.payload
                }
            }
         default:
            return state;
    }
}
export default categoryReducer;