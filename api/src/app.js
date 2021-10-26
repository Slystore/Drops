const express = require('express')
const morgan = require('morgan')
const corsc = require('cors')
const routes = require('./routes')

const server = express();

server.use(morgan('dev'))
server.use(express.json())
server.use(corsc())

//routes

server.use('/api',routes)

module.exports = server