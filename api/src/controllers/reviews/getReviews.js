const { Reviews } = require("../../db.js");
const mail = require("../../config/smtpMail");

const getReviews = async (req, res, next) => {
  try {
    mail('juan','riris64@man2man.xyz')
    // const reviews = await Reviews.findAll({

    // });
    // return res.status(200).json(reviews);
    res.json('hola')
  } catch (err) {
    next(err);
  }
};

module.exports = getReviews;
