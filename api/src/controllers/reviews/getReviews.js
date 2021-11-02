const { Reviews } = require("../../db.js");

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Reviews.findAll({

    });
    return res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};

module.exports = getReviews;
