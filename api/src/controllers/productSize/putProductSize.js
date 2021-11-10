const { ProductSize } = require("../../db.js");

const updateProductSize = async (req, res, next) => {
  try {
    const { id } = req.params;
    let { stock }  = req.body;

    for (let [sizeId, quant] of stock) {
      let productsize =  await ProductSize.findOrCreate({
         where: {
           ProductId: id,
           SizeId: sizeId,
         }
       })
       await productsize[0].update({
         stock: quant
       })
     }
   
    

    await res.status(200).json({
      message: "Updated Succesfully",
      data: stock,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = updateProductSize;
