const { Product, Users, OrderDetail, Orders } = require("../../db.js");

const postOrderTomi = async (req, res, next) => {
  try {
    const { products, userId } = req.body;

    const order = await Orders.findOne({
      where: {
        UserId: userId,
        status: "inCart",
      },
    });

    if (!order) {
      const order2 = await Orders.create({
        userId,
        products,
      });
      
      const user = await Users.findByPk(userId);
      user.addOrders(order2);

      products?.forEach(async (product) => {
        const productData = await Product.findByPk(product.productId);

        order2.addProduct(productData, {
          through: {
            quantity: product.quantity,
            price: productData.price,
            sizeId: product.SizeId? product.SizeId: null
          },
        });
      });
      
      return res.json({
        status: `${order2.status}`,
        message: true,
        orderId: `${order2.id}`,
      });
    } else
      res.json({
        status: `${order.status}`,
        message: false,
        orderId: `${order.id}`,
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = postOrderTomi;
