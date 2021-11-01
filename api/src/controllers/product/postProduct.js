const {Product, Size, Category, Brand} = require("../../db.js");

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
        sizeId
    } = req.body;

    let productCreated = await Product.create({
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

    res.status(200).json(productCreated)
  } catch (err) {
    next(err);
  }
};

module.exports = { postProduct };
