const { Product } = require("../../db.js");

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { name, image, description, price } = req.body;

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
    status:"no disponible",
  });

  return res.status(200).json({
    message: "Product updated",
  });
};

module.exports = deleteProduct;
