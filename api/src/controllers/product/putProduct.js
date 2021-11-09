const { Product, Size, ProductSize, Category, Brand } = require("../../db.js");

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const {
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

  let findProductSize = await ProductSize.findAll({
    where: {
      ProductId: id,
    },
  });

  let stockBody;
  for (let i = 0; i < stock.length; i++) {
    [sizeBody, stockBody] = stock[i];
    await findProductSize[i].update({
      stock: stockBody,
    });
  }

  const product = await Product.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Size,
        through: {
          model: ProductSize,
          attributes: {
            exclude: ["SizeId", "ProductId"],
          },
        },
      }
    ],
  });
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await product.update({
    name,
    image,
    description,
    price,
    status,
    CategoryId: categoryId,
    BrandId: brandId, 
    SizeId: sizeId,
    stock: findProductSize
  });

  return res.status(200).json({
    data: product,
    message: "Product updated",
  });
};

module.exports = updateProduct;
