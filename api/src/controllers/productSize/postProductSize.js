const {Product, Size, ProductSize} = require("../../db.js");

const postProductSize = async (req, res, next) => {
  try {
    let {
        stock,
        ProductId,
        SizeId,
    } = req.body;

    let productSizeCreated = await ProductSize.create({
        stock: stock,
        ProductId: ProductId,
        SizeId: SizeId
    });

    const findProduct = await Product.findOne({
      where: {
         ProductId,
      },
    });

    const findSize = await Size.findOne({
      where: {
        SizeId,
      },
    });


    console.log(findProduct);
    await productSizeCreated.addProduct(findProduct);
    await productSizeCreated.addSize(findSize);

    res.status(200).send(productSizeCreated)
  } catch (err) {
    next(err);
  }
};

module.exports =  postProductSize;