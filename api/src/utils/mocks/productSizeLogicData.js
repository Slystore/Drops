const { Size, Product, ProductSize } = require("../../db.js");
const { productSizeData } = require("./productSizeData.js");

const productSizeLogicData = async () => {
  for (let item of productSizeData) {
    await ProductSize.create({
      stock: item.stock,
      SizeId: item.sizeId,
      ProductId: item.productId,
    });
  }
};

module.exports = { productSizeLogicData };
