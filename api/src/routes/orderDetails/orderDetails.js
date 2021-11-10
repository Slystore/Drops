const {Router} = require('express');
const router = Router();

const getAllOrderDetails = require('../../controllers/orderDetail/getOrderDetail.js');
const getOrderDetailById = require('../../controllers/orderDetail/getOrderDetailById.js');

router.get('/', getAllOrderDetails);
router.get('/:id', getOrderDetailById);

module.exports = router