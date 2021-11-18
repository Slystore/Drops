const express = require('express')
const login = require('../../controllers/User-Controller/user-Log')
const register = require('../../controllers/User-Controller/user-Register')
const putUser = require('../../controllers/User-Controller/user-Put')
const userGet = require('../../controllers/User-Controller/user-Get')
const googleLogin = require('../../controllers/Google-Controller/googleLog')
const forgotPassword = require('../../controllers/User-Controller/user-ForgotPassword')
const newPassword = require('../../controllers/User-Controller/user-NewPass')
const userCount = require('../../controllers/User-Controller/user-Count')
const router = express.Router()


router.get('/allUser/',userGet)
router.get('/allUser/:id',userGet)
router.get('/allUser',userGet)

router.put('/edit/:id',putUser)
router.get('/countUser',userCount)
router.post('/register',register)
router.post('/login',login)
router.post('/googleLogin',googleLogin)

router.put('/newPassword/:id',newPassword)
router.put('/forgotPassword',forgotPassword)

module.exports = router