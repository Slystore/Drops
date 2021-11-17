const { Router } = require("express");
const router = Router();
const createBrand = require("../../controllers/brands/postBrand");
const getBrands = require("../../controllers/brands/getBrands.js");
const editBrand = require("../../controllers/brands/putBrands");
const getQuantityBrands = require("../../controllers/brands/getQuantityBrands.js");

router.post("/create", createBrand);
router.get("/getAllBrands", getBrands);
router.get('/getQuantityBrands/:id', getQuantityBrands);
router.get("/getOneBrand/:id", getBrands);
router.put("/editBrand", editBrand);

module.exports = router;
