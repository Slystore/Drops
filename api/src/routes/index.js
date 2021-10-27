const express = require('express');
const reviewsRoutes = require('./reviews/reviewRoutes');
const users = require('../routes/User/User');

const app = express.Router();

app.use('/',users);
app.use('/reviews', reviewsRoutes);

module.exports = app; 