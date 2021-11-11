const { WishList } = require("../../db");

const createWish = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    if (userId && productId) {
      const myWish = await WishList.create({
        UserId: userId,
        ProductId: productId,
        favorite: true,
      });
      console.log(myWish);

      return res.status(200).json({ msg: "Agregado a mis desesados", myWish });
    } else {
      throw new Error("Falta informacion");
    }
  } catch (error) {
    console.log("rompo en la wish", error);
  }
};
module.exports = createWish;
