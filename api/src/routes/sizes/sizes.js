const {Router} = require('express');
const router = Router();

const getSizes = require('../../controllers/size/getSize.js')


router.get('/', getSizes);


module.exports = router