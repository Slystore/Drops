const { Router } = require("express");
const router = Router();
const { getBranchOffice } = require("../../controllers/branchOffice/getBranchOffice.js");

router.get("/", getBranchOffice);

module.exports = router;
