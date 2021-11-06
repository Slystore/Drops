const { Product, Size, ProductSize } = require("../../db.js");

const updateProductSize = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {productId, sizeId, stock} = req.body;

    const findProductSize = await ProductSize.findAll({
      where: {
        ProductId: id,
      },
    });
    findProductSize.forEach(async (el) => {
      findProductSize.update({
          ProductId: productId,
          SizeId: sizeId,
          stock: stock
      })
    });

    res.status(200).json({
      message: "Product Size Updated Successfully",
      data: findProductSize,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = updateProductSize;
