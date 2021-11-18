const express = require('express')
const morgan = require('morgan')
const corsc = require('cors')
const routes = require('./routes')
const { errors, errorHandling} = require('./config/errorHandler')
const cors = require('./config/cors')

const server = express();

server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')

server.use(morgan('dev'))
server.use(express.json())
server.use(express.static('public'))
server.use(corsc())
server.use(cors);
// server.use(errors)
server.use(errorHandling)

//routes

server.use('/api',routes)





module.exports = server