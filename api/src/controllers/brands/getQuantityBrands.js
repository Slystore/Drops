const { Product, Brand } = require("../../db.js");

const getQuantityBrands = async (req, res) => {
  try {
    const {id}  = req.params;
    const getQuantityBrands = await Product.findAndCountAll({
      where: {
        BrandId: id,
      },
    });
    res.status(200).json({
      data: getQuantityBrands,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getQuantityBrands;
