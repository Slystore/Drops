import { combineReducers } from 'redux';

import reviewsReducer from './reviews/reviewsReducer';
import usersReducer from './users/usersReducer';
import productReducer from './products/productsReducer';
import brandReducer from './brand/brandReducer';
import categoriesReducer from './category/categoriesReducer';
import sizeReducer from './sizes/sizeReducer';


export const reducers = combineReducers({
    reviewsReducer,
    usersReducer,
    productReducer,
    brandReducer,
    categoriesReducer,
    sizeReducer

});

export default reducers;