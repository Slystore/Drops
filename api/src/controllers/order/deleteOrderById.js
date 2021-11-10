const { Users, Product, Orders, OrderDetail } = require("../../db");

async function deleteProductById(req, res, next) {
  try {
    const { userId, productId } = req.body;

    const order = await Orders.findOne({
      where: {
        UserId: userId, 
        status: "inCart"
      }
    });

    const orderDetail = await OrderDetail.findOne({
      where: {
        OrderId: order.id,
        ProductId: productId
      }
    });

    if (orderDetail) {
      await orderDetail.destroy();
      return res.json({
        message: `Producto eliminado ID: ${productId}`
      });
    } else { 
      return res.json({
        message: "No existe el producto"
      });
    }    
  } catch (error) {
    next(error);
  }
}

module.exports = deleteProductById
