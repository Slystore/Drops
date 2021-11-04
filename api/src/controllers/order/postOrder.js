const { Product, Users, OrderDetail, Orders } = require("../../db.js");

const postOrder = async (req, res) => {
  const {
    location,
    totalPrice,
    paymentId,
    paymentStatus,
    merchantOrderId,
    status,
    userId,
    cart, //[{ productId, price, quantity }]
  } = req.body;

  try {
    const getOrder = await Orders.findOne({
      where: {
        id: userId,
      },
    });

    if (!getOrder) {
      const user = await Users.findOne({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const order = await Orders.create({
        date: new Date().toISOString(),
        location,
        totalPrice,
        paymentId,
        paymentStatus,
        merchantOrderId,
        status: status || "pending",
        userId,
        cart,
      });
      await user.addOrders(order.id);

      cart?.forEach(async (el) => {
        const productData = await Product.findByPk(el.productId);
        order.addProduct(productData.id, {
          through: {
            price: productData.price,
            quantity: el.quantity,
          }
          });
      });
      
      return res.json({
        status: `${order.status}`,
        message: true,
        orderId: `${order.id}`
      });
    }else{
      res.status(500).json({
        message: "User already has an Order",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = postOrder;
