const express = require('express')
const login = require('../../controllers/User-Controller/user-Log')
const register = require('../../controllers/User-Controller/user-Register')
const putUser = require('../../controllers/User-Controller/user-Put')

const router = express.Router()

router.put('/edit/:id',putUser)
router.post('/register',register)
router.post('/login',login)

module.exports = router