const {Router} = require('express');
const router = Router();

const getOrder = require('../../controllers/order/getOrder.js');
const postOrder = require('../../controllers/order/postOrder.js');

router.get('/', getOrder);
router.post('/createOrder', postOrder);

module.exports = router