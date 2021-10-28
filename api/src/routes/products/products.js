const {Router} = require('express');
const router = Router();

const getProducts = require('../../controllers/product/getProducts.js')


router.get('/', getProducts)


module.exports = router