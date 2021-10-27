const express = require('express')
const login = require('../../controllers/User-Controller/user-Log')
const register = require('../../controllers/User-Controller/user-Register')

const router = express.Router()

router.post('/register',register)
router.post('/login',login)

module.exports = router