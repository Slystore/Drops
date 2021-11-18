const express = require('express');
const app = express.Router();

const reviewsRoutes = require('./reviews/reviewRoutes');
const users = require('../routes/User/User');
const products = require('./products/products.js');
const categories = require('./categories/categories.js');
const brands = require('./brands/brands.js');
const sizes = require('./sizes/sizes.js');
const productSizes = require('./productSize/productSize.js');
const orders = require('./order/order.js');
const orderDetails = require('./orderDetails/orderDetails.js');
const branchOffice = require('./branchOffice/branchOffice.js');
const newsletter = require('./newsletter/newsletter');
const mercadopago = require('./mercadoPago/mercadoPago.js');
const wishList = require('./wishList/wishList')
const discounts = require('./discounts/discounts')
const mail = require('./mail')


app.use('/wishList',wishList)
app.use('/',users);
app.use('/reviews', reviewsRoutes);
app.use('/products', products);
app.use('/categories', categories);
app.use('/brands', brands);
app.use('/productSizes', productSizes);
app.use('/sizes', sizes);
app.use('/orders', orders);
app.use('/orderDetails', orderDetails);
app.use('/branchOffice', branchOffice);
app.use('/newsletter', newsletter);
app.use('/mercadopago', mercadopago);
app.use('/discounts', discounts);
app.use('/mail', mail);

module.exports = app; 