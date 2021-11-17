import { combineReducers } from 'redux';

import reviewsReducer from './reviews/reviewsReducer';
import usersReducer from './users/usersReducer';
import productReducer from './products/productsReducer';
import brandReducer from './brand/brandReducer';
import categoriesReducer from './category/categoriesReducer';
import sizeReducer from './sizes/sizeReducer';
import newsletterReducer from './newsletter/newsletterReducer';
import cartReducers from './cart/cartReducer';
import ratingReducer from './rating/ratingReducer';
import ordersReducer from './orders/ordersReducer';
import discountsReducer from './discounts/discountsReducer';
import dashReducer from './dashboard/dashReducer';

export const reducers = combineReducers({
    reviewsReducer,
    usersReducer,
    productReducer,
    brandReducer,
    categoriesReducer,
    sizeReducer,
    newsletterReducer,
    cartReducers,
    ratingReducer,
    ordersReducer,
    discountsReducer,
    dashReducer
});

export default reducers;