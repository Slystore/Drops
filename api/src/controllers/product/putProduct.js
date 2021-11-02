const { Product } = require("../../db.js");

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const { name, image, description, price, status } = req.body;

  const product = await Product.findOne({
    where: {
      id,
    },
  });

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await product.update({
    name,
    price,
    description,
    image,
    status,
  });

  return res.status(200).json({
    message: "Product updated",
  });
};

module.exports = updateProduct;
