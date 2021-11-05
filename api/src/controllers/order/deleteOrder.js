const { Orders } = require("../../db.js");

const deleteOrder = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleted = await Orders.destroy({
        where: {
            id: id
        }
    });
    if (!deleted) {
      throw new Error(`Order with id: ${id} not found`);
    }

    return res.status(200).send(`Order ${id} successfully deleted`);
  } catch (err) {
    console.log(err);
    return res.status(409).send({
      error: err.message,
    });
  }
};

module.exports = deleteOrder;