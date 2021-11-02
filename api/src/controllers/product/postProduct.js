const { Product, Size, Category, Brand, ProductSize } = require("../../db.js");

const postProduct = async (req, res, next) => {
  try {
    let {
      name,
      image,
      description,
      price,
      status,
      categoryId,
      brandId,
      sizeId,
      stock,
    } = req.body;

    const productCreated = await Product.create({
      name,
      image,
      description,
      price,
      status,
      categoryId,
      brandId,
      sizeId,
    });

    const findCategory = await Category.findOne({
      where: {
        id: categoryId,
      },
      through: {
        attributes: ["id"],
      },
    });

    const findBrand = await Brand.findOne({
      where: {
        id: brandId,
      },
    });

    const findSize = await Size.findAll({
      where: {
        id: sizeId,
      },
    });

    await productCreated.setCategory(findCategory);
    await productCreated.setBrand(findBrand);
    await productCreated.addSizes(findSize);


    let findProductSize = await ProductSize.findAll({
      where: {
        ProductId: productCreated.id,
        SizeId: sizeId,
      },
    });

    let sizeBody;
    let stockBody;

    for (let i = 0; i < stock.length; i++) {
      [sizeBody, stockBody] = stock[i];
      findProductSize[i].update({
        sizeId: sizeBody,
        stock: stockBody,
      });
    }

    res.status(200).json({
      message: "Product created",
      data: productCreated,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { postProduct };
