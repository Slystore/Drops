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
    });

    const findCategory = await Category.findOne({
      where: {
        name: categoryId,
      },
      through: {
        attributes: ["id"],
      },
    });

    const findBrand = await Brand.findOne({
      where: {
        name: brandId,
      },
    });

    const findSize = await Size.findOne({
      where: {
        number: sizeId,
      },
    });   

    await productCreated.setCategory(findCategory);
    await productCreated.setBrands(findBrand);
    await productCreated.addSizes(findSize);

    res.status(200).json(productCreated)
  } catch (err) {
    next(err);
  }
};

module.exports = { postProduct };
