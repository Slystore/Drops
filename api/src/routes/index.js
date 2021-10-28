const express = require('express');
const app = express.Router();

const reviewsRoutes = require('./reviews/reviewRoutes');
const users = require('../routes/User/User');
const products = require('./products/products.js');
const categories = require('./categories/categories.js');
const brands = require('./brands/brands.js');

app.use('/',users);
app.use('/reviews', reviewsRoutes);
app.use('/products', products);
app.use('/Categories', categories);
app.use('/brands', brands);

module.exports = app; 