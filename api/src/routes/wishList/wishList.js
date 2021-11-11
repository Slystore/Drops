const express = require('express')

const router = express.Router()
const createWish = require('../../controllers/WishList/wishList-post')
const getWish = require('../../controllers/WishList/wishList-get')
router.post('/addWish',createWish)

router.get('/wish/:id',getWish)


module.exports = router