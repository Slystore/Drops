const { Router } = require("express");
const router = Router();
const createBrand = require("../../controllers/brands/postBrand");
const getBrands = require("../../controllers/brands/getBrands.js");
const editBrand = require("../../controllers/brands/putBrands");

router.post("/create", createBrand);
router.get("/getAllBrands", getBrands);
router.get("/getOneBrand/:id", getBrands);
router.put("/editBrand/:id", editBrand);

module.exports = router;
