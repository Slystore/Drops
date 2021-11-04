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
    cart,
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
          cart
        });
        await user.addOrders(order.id);
        await order.setUser(user.id);

        cart.forEach(async (el) => {
          try{
            const productData = await Product.findByPk(el.id);
            await OrderDetail.create({
              quantity: el.quantity,
              price: el.price,
              orderId: order.id,
              productId: productData.id,
            });
          }catch(err){
            console.log(err)
          }
        });
        res.status(200).json({
          message: "Order created successfully",
          order: order
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
