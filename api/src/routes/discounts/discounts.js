const {Router} = require('express')
const postDiscount = require('../../controllers/discounts/postDiscount');
const getDiscounts = require('../../controllers/discounts/getDiscounts');
const putForDiscounts = require('../../controllers/discounts/putForDiscounts');
const putDiscountsById = require('../../controllers/discounts/putDiscountsById');
const discountUnsubscribe = require('../../controllers/discounts/discountUnsubscribe.js');
const router = Router()

router.get('/', getDiscounts);
router.post('/create', postDiscount);



module.exports = router