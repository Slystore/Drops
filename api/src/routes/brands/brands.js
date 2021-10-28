const {Router} = require('express');
const router = Router();

const getBrands = require('../../controllers/brands/getBrands.js')


router.get('/', getBrands);


module.exports = router