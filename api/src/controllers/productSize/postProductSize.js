const { Product, Size, ProductSize } = require("../../db.js");
const postProductSize = async (req, res, next) => {
  try {
    let {
      stock, //stock{40: 2 , 41 :5, 42: 3}
      ProductId, //120
      SizeId, //
    } = req.body;

    console.log(ProductId, "tomi0");

    let findProductSize = await ProductSize.findAll({
      where: {
        ProductId: ProductId,
        SizeId: SizeId,
      },
    });

    console.log("tomi", findProductSize);
    let promises = [];

    findProductSize.forEach((el) => {
      promises.push(el.update({ stock: stock }));
    });

    Promise.all(promises).then(res.status(200).json(findProductSize));
  } catch (err) {
    console.log(err);
  }
};
module.exports = postProductSize;
