const {Router} = require('express');
const router = Router();

const getProductSizes = require('../../controllers/productSize/getproductSize.js')
const getProductSizesById = require('../../controllers/productSize/getProductSizeById.js')
const postProductSize = require('../../controllers/productSize/postProductSize.js')

router.get('/', getProductSizes);
router.get('/:id', getProductSizesById);
router.post('/createProductStock', postProductSize);

module.exports = router