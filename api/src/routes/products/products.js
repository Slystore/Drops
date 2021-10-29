const {Router} = require('express');
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js');
const getProductById = require('../../controllers/product/getProductById.js');

router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router