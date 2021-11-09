const { ProductSize } = require("../../db.js");

const updateProductSize = async (req, res, next) => {
  try {
    const { id } = req.params;
    let { stock }  = req.body;
    
    let findProductSize = await ProductSize.findAll({
      where: {
        ProductId: id,
      },
    });

    // const findSize = await Size.findAll({
    //   where: {
    //     id: sizeId,
    //   },
    // });

    let sizeBody;
    let stockBody;
    
    for (let i = 0; i < stock.length; i++) {
      [ sizeBody, stockBody] = stock[i];
      await findProductSize[i].update({
        sizeId: sizeBody,
        stock: stockBody,
      });

    }
    await res.status(200).json({
      message: "Updated Succesfully",
      data: findProductSize,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = updateProductSize;
