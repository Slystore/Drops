const { Size } = require("../../db.js");

const getSizes = async (req, res, next) => {
  try {
    const allSizes = await Size.findAll({});
    return res.status(200).json(allSizes);
  } catch (err) {
    next(err);
  }
};

module.exports = getSizes;
