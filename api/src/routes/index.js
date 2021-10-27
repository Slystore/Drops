const express = require('express')
const reviewsRoutes = require('./reviews/reviewRoutes')

const app = express.Router()

app.use('/reviews', reviewsRoutes)


module.exports = app; 