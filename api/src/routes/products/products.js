const {Router} = require('express');
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js');
const getProductById = require('../../controllers/product/getProductById.js');
const {postProduct} = require('../../controllers/product/postProduct.js');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/createProduct', postProduct);

module.exports = router