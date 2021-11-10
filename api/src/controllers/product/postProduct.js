const { updateOrCreateProduct } = require("./updateOrCreateProduct.js");

const postProduct = async (req, res, next) => {
  try {
    const product = await updateOrCreateProduct(req.body); 
    res.status(200).json({
      message: "Product created",
      data: product,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { postProduct };
