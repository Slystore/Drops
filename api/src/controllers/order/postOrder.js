const { Product, Users, OrderDetail, Orders } = require("../../db.js");

const postOrder = async (req, res) => {
  const {
    products,
    location,
    totalPrice,
    paymentId,
    paymentStatus,
    merchantOrderId,
    status,
    userId,
    cart,
  } = req.body;

  try {
    const product = await Product.findAll({
      where: {
        id: products,
      },
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    };
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
      products,
      location,
      totalPrice,
      paymentId,
      paymentStatus,
      merchantOrderId,
      status: status || "pending",
      userId,
      cart
    });

    await user.addOrders(order.id);
    await order.setUser(user.id);

    cart.forEach(async (el) => {
      console.log("entro",el)
      try{
        const orderDetail = await OrderDetail.create({
        // OrderId: order.id,
        // ProductId: products.map((el) => el.id),
        quantity: el.quantity,
        price: el.price,
      });
      await orderDetail.setOrders(order.id);
      await orderDetail.setProduct(products.map((el) => el.id))
      }catch(err){
        console.log(err)
      }
    });
    if(!cart){
      return res.status(404).json({
        message: "Cart is Empty",
      });
    }
    res.status(200).json({
      message: "Order created successfully",
      order: order
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = postOrder;
