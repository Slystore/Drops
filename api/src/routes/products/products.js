const {Router} = require('express');
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js');
const getProductById = require('../../controllers/product/getProductById.js');
const {postProduct} = require('../../controllers/product/postProduct.js');
const updateProduct = require('../../controllers/product/putProduct.js');
const deleteProduct = require('../../controllers/product/deleteProduct.js');
const putForDiscounts = require('../../controllers/product/putForDiscounts');
const putDiscountsById = require('../../controllers/product/putDiscountsById');
const discountUnsubscribe = require('../../controllers/product/discountUnsubscribe.js');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/createProduct', postProduct);
router.put('/updateProduct', updateProduct);
router.put('/discount', putForDiscounts);
router.put('/discount/:id', putDiscountsById);
router.put('/:id/discountOff', discountUnsubscribe);
router.put('/deleteProduct/:id', deleteProduct);

module.exports = router