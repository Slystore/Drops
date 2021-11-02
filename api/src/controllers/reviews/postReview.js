const { Reviews, Users, Product } = require("../../db");

const postReview = async (req, res, next) => {
  try {
    const { comment, rating, user, productId } = req.body;
    
    const userQuery = await Users.findOne({
      where: {
        id: user,
      },
    });

    const reviewCreation = await Reviews.create({
      comment,
      rating,
      productId: productId,
    });
    
    const findProduct = await Product.findOne({
      where: {
        id: productId,
      },
    });

    findProduct.addReview(reviewCreation);
    userQuery.addReviews(reviewCreation);

    res.json({ message: "Thanks for the review!" });
  } catch (error) {
    next(error);
  }
};

module.exports = postReview;
