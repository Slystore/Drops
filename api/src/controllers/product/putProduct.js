const { updateOrCreateProduct } = require("./updateOrCreateProduct.js");

const updateProduct = async (req, res) => {
  const product = await updateOrCreateProduct(req.body, req.body.id);
  return await res.status(200).json({
    data: product,
    message: "Product updated",
  });
};

module.exports = updateProduct;
