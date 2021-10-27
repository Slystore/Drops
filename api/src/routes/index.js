const express = require('express')
const users = require('../routes/User/User')
const app = express.Router()

app.use('/',users)

module.exports = app; 