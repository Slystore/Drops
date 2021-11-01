const { ProductSize } = require("../../db.js");

const getProductSizes = async (req, res, next) => {
  try {
    const productSizes = await ProductSize.findAll({

    });
    return res.status(200).json(productSizes);
  } catch (err) {
    next(err);
  }
};

module.exports = getProductSizes;
