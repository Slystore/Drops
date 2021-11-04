const {Router} = require('express');
const router = Router();

const getOrder = require('../../controllers/order/getOrder.js');
const getOrderById = require('../../controllers/order/getOrderById.js');
const postOrder = require('../../controllers/order/postOrder.js');
const updateOrder = require('../../controllers/order/putOrder.js');
const deleteOrder = require('../../controllers/order/deleteOrder.js');

router.get('/', getOrder);
router.get('/:id', getOrderById);
router.post('/createOrder', postOrder);
router.put('/updateOrder/:id', updateOrder);
router.delete('/deleteOrder/:id', deleteOrder);
module.exports = router