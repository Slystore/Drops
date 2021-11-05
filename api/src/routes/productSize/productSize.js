const {Router} = require('express');
const router = Router();

const getProductSizes = require('../../controllers/productSize/getproductSize.js')
const getProductSizesById = require('../../controllers/productSize/getProductSizeById.js');
const updateProductSize = require('../../controllers/productSize/putProductSize.js');

router.get('/', getProductSizes);
router.get('/:id', getProductSizesById);
router.put('/updateProductSize/:id', updateProductSize);

module.exports = router