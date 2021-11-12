const { Orders, Product, Users } = require("../../db.js");

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findByPk(id, {
      include: [
        {
          model: Users,
          attributes: ["id", "name", "surname", "mail"],
        },
        {
          model: Product,
          attributes: ["id", "name", "price", "image"],
        },
      ],
    });
    if (!order) {
      return res.status(404).json({
        message: "order id: " + id + " not found",
      });
    } else {
      return res.json(order);
    }
  } catch (error) {
    console.log(error);
    a;
  }
};

module.exports = getOrderById;
