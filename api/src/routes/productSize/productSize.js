const {Router} = require('express');
const router = Router();

const getProductSizes = require('../../controllers/productSize/getproductSize.js')
const getProductSizesById = require('../../controllers/productSize/getProductSizeById.js')

router.get('/', getProductSizes);
router.get('/:id', getProductSizesById);

module.exports = router