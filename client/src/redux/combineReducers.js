import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';
import productsReducer from './products/productsReducer';
import brandReducer from './brand/brandReducer';
import categoryReducer from './category/categoryReducer';

export const reducers = combineReducers({
    reviewsReducer,
    productsReducer,
    brandReducer,
    categoryReducer
});

export default reducers;