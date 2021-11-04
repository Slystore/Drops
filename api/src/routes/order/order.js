const {Router} = require('express');
const router = Router();

const getOrder = require('../../controllers/order/getOrder.js');
const postOrder = require('../../controllers/order/postOrder.js');
const updateOrder = require('../../controllers/order/putOrder.js');


router.get('/', getOrder);
router.post('/createOrder', postOrder);
router.put('/updateOrder/:id', updateOrder);

module.exports = router