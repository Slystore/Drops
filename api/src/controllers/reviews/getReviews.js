const { Reviews } = require("../../db.js");
const mail = require("../../config/smtpMail");

const getReviews = async (req, res, next) => {
  try {
    // mail('juan_itu@yahoo.com.ar')
    const reviews = await Reviews.findAll({

    });
    return res.status(200).json(reviews);
    // res.json('hola')
  } catch (err) {
    next(err);
  }
};

module.exports = getReviews;
