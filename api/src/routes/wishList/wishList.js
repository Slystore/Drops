const express = require('express')

const router = express.Router()
const createWish = require('../../controllers/WishList/wishList-post')
const getWish = require('../../controllers/WishList/wishList-get')
const unFavorite = require('../../controllers/WishList/wishList-delete')
router.post('/addWish',createWish)

router.get('/wish/:id',getWish)
router.delete('/unWish/:id/:productId',unFavorite)

module.exports = router