const { Users, Product, Orders, OrderDetail } = require("../../db");


/*
Ruta localhost:3001/orders/delete/product
Elimina un producto de una orden
body = {
  userId,
  productId
}
*/
async function deleteProductById(req, res, next) {
  try {
    //Debe es cambiar el estado
    const { userId, productId } = req.body;
    // console.log("----------------------------")
     console.log(req.body)
     console.log(productId)
    // console.log("----------------------------")
    const order = await Orders.findOne({
      where: {
        UserId: userId, 
        status: "inCart"
      }
    });
    // console.log('order.id',order);
    const orderDetail = await OrderDetail.findOne({
      where: {
        OrderId: order.id,
        ProductId: productId
      }
    });
    // console.log('orderProduct', orderProduct);
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
