const express = require('express')
const login = require('../../controllers/User-Controller/user-Log')
const register = require('../../controllers/User-Controller/user-Register')
const putUser = require('../../controllers/User-Controller/user-Put')
const userGet = require('../../controllers/User-Controller/user-Get')
const googleLogin = require('../../controllers/Google-Controller/googleLog')
const router = express.Router()


router.get('/allUser/',userGet)
router.get('/allUser/:id',userGet)
router.get('/allUser',userGet)

router.put('/edit/:id',putUser)

router.post('/register',register)
router.post('/login',login)
router.post('/googleLogin',googleLogin)

module.exports = router