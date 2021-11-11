const express = require('express')

const router = express.Router()
const createWish = require('../../controllers/WishList/wishList-post')

router.post('/addWish',createWish)



module.exports = router