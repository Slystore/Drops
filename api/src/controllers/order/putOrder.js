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

      products?.forEach(async (el) => {
        const productData = await Product.findByPk(el.productId);

        const productExists = getOrderDetail.find(
          (pe) => pe.ProductId === el.productId
        );
        if (!productExists) {
          order.addProduct(productData, {
            through: {
              quantity: el.quantity,
              price: productData.price,
              sizeId: el.SizeId? el.SizeId: null
            },
          });
        } else {
          await productExists.update({
            quantity: el.quantity,
            price: productData.price,
            sizeId: el.SizeId? el.SizeId: null
          });
        }
      });
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
      shippingCity,
    });
    return res.json(`Orden actualizada ID:${order.id}`);
  } catch (err) {
    console.log(err);
    return res.send("Order is not created ERROR");
  }
}

module.exports = putOrder;
