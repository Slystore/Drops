const { Orders } = require("../../db.js");

const getOrderByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findAll({
      where: {
          UserId: id
      },
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
  }
};

module.exports = getOrderByUserId;
