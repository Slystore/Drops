const {Router} = require('express');
const router = Router();

const getCategories = require('../../controllers/categories/getCategories.js')


router.get('/', getCategories);


module.exports = router