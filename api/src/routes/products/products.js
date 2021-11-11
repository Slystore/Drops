const {Router} = require('express');
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js');
const getProductById = require('../../controllers/product/getProductById.js');
const {postProduct} = require('../../controllers/product/postProduct.js');
const updateProduct = require('../../controllers/product/putProduct.js');
const deleteProduct = require('../../controllers/product/deleteProduct.js');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/createProduct', postProduct);
router.put('/updateProduct', updateProduct);
router.put('/deleteProduct/:id', deleteProduct);

module.exports = router