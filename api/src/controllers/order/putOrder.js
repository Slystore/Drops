const { Users, Product, Orders, OrderDetail } = require("../../db.js");

async function putOrder(req, res, next) {
  try {
    const { id } = req.params;
    const {
      status,
      location,
      cart, 
    } = req.body;

    const order = await Orders.findByPk(id);

    if (!order) {
      return res.status(404).send({
        message: "Order not found",
      });
    }

    if (order.status === "inCart") {
      const getOrderDetail = await OrderDetail.findAll({
        where: {
          OrderId: id,
        },
      });

      cart?.forEach(async (el) => {
        const productData = await Product.findByPk(el.productId);

        const productExists = getOrderDetail.find(
          (pe) => pe.ProductId === el.productId
        );

        if (!productExists) {
          order.addProduct(productData, {
            through: {
              quantity: el.quantity,
              price: productData.price,
            },
          });
        } else {
          await productExists.update({
            quantity: el.quantity,
            price: productData.price,
          });
        }
      });
    } else {
      return res.status(400).send({
        message: "Cart order doesnt have products",
      });
    }
    order.update({
      status,
      location,
      cart,
    });
    return res.json(`Orden actualizada ID:${order.id}`);
  } catch (err) {
    console.log(err);
    return res.send("Order is not created ERROR");
  }
}

module.exports = putOrder;