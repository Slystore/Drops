const { Router } = require("express");
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js');
const getProductById = require('../../controllers/product/getProductById.js');
const {postProduct} = require('../../controllers/product/postProduct.js');
const updateProduct = require('../../controllers/product/putProduct.js');
const deleteProduct = require('../../controllers/product/deleteProduct.js');
const putDiscountsById = require('../../controllers/discounts/putDiscountsById');
const putForDiscount = require('../../controllers/discounts/putForDiscounts');
const discountUnsubscribe = require('../../controllers/discounts/discountUnsubscribe');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/createProduct', postProduct);
router.put('/updateProduct', updateProduct);
router.put('/deleteProduct/:id', deleteProduct);
router.put('/discount/:id', putDiscountsById);
router.put('/discount', putForDiscount);
router.put('/:id/discountOff', discountUnsubscribe);

module.exports = router;
