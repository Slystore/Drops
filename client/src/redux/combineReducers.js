import { combineReducers } from 'redux';

import reviewsReducer from './reviews/reviewsReducer';
import usersReducer from './users/usersReducer';
import productReducer from './products/productsReducer';
import brandReducer from './brand/brandReducer';
import categoriesReducer from './category/categoriesReducer';
import sizeReducer from './sizes/sizeReducer';
import newsletterReducer from './newsletter/newsletterReducer';
import cartReducersTomi from './cartTomi/cartReducerTomi';
import ratingReducer from './rating/ratingReducer';
import ordersReducer from './orders/ordersReducer';
import cartReducer from './cart/cartReducer';
import discountsReducer from './discounts/discountsReducer';

export const reducers = combineReducers({
    reviewsReducer,
    usersReducer,
    productReducer,
    brandReducer,
    categoriesReducer,
    sizeReducer,
    newsletterReducer,
    cartReducer,
    cartReducersTomi,
    ratingReducer,
    ordersReducer,
    discountsReducer
});

export default reducers;