const {Router} = require('express')
const postDiscount = require('../../controllers/discounts/postDiscount')
const getDiscounts = require('../../controllers/discounts/getDiscounts')

const router = Router()

router.get('/', getDiscounts)
router.post('/create', postDiscount)

module.exports = router