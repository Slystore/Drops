import { combineReducers } from 'redux';

import reviewsReducer from './reviews/reviewsReducer';
import usersReducer from './users/usersReducer';
import productReducer from './products/productsReducer';
import brandReducer from './brand/brandReducer';
import categoriesReducer from './category/categoriesReducer';
import sizeReducer from './sizes/sizeReducer';
import newsletterReducer from './newsletter/newsletterReducer';

import cartReducer from './cart/cartReducer';

export const reducers = combineReducers({
    reviewsReducer,
    usersReducer,
    productReducer,
    brandReducer,
    categoriesReducer,
    sizeReducer,
    newsletterReducer,
    cartReducer
});

export default reducers;