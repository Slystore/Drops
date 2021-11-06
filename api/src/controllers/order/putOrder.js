const { Users, Product, Orders, OrderDetail } = require("../../db.js");

async function putOrder(req, res, next) {
  try {
    const { id } = req.params;
    const {
      status,
      shippingState,
      shippingLocation,
      paymentState,
      shippingAddress,
      shippingZip,
      shippingLocated,
      shippingCity,
      products,
    } = req.body;
//Se busca la orden por primary key'
    const order = await Orders.findByPk(id);
    // console.log(order,"tomiput")
//Si la order no existe, se crea y se retorna el orderId
    if (!order) {
      return res.status(404).send({
        message: "Order not found",
      });
    }
//Si existe y es de tipo inCart y trae productos se fusionan
    if (order.status === "inCart") {
      //Array de productos actuales de la orden
      const getOrderDetail = await OrderDetail.findAll({
        where: {
          OrderId: id,
        },
      });

      products?.forEach(async (el) => {
           //Buscamos el producto en la DB
        const productData = await Product.findByPk(el.productId);

        const productExists = getOrderDetail.find(
          (pe) => pe.ProductId === el.productId
        );
  //Si no lo encuentra lo agrega a la orden
        if (!productExists) {
          order.addProduct(productData, {
            through: {
              quantity: el.quantity,
              price: productData.price,
            },
          });
        } else {   //Si lo encuentra lo actualiza 
          await productExists.update({
            quantity: el.quantity,
            price: productData.price,
          });
        }
      });
    // } else {
    //   return res.status(400).send({
    //     message: "Cart order doesnt have products",
    //   });
     }
    order.update({
      status,
      shippingState,
      shippingLocation,
      paymentState,
      shippingAddress,
      shippingZip,
      shippingLocated,
      products,
      shippingCity
    });
    return res.json(`Orden actualizada ID:${order.id}`);
  } catch (err) {
    console.log(err);
    return res.send("Order is not created ERROR");
  }
}

module.exports = putOrder;