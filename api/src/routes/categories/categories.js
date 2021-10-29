const {Router} = require('express');
const router = Router();
const createCategory = require('../../controllers/categories/postCategories')
const getCategories = require('../../controllers/categories/getCategories.js')
const editCategory = require('../../controllers/categories/putCategories')


router.post('/createCategory',createCategory)


router.get('/getAllCategory', getCategories);
router.get('/getAllCategory:/id', getCategories);


router.put('/editCategory/:id',editCategory)
//tambien hay busqueda por query


module.exports = router