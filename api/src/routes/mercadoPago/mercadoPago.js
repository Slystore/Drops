const { Router } = require("express");
const router = Router();
// const { pagosId } = require('../../controllers/mercadoPago/payment');
const payment  = require('../../controllers/mercadoPago/payment');
const  mercadoPago = require('../../controllers/mercadoPago/mercadoPago');


 


router.get("/pagos", payment);
router.get("/:userId", mercadoPago);


module.exports = router;