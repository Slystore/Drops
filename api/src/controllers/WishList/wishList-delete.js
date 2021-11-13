const { WishList } = require("../../db");
const unFavorite = async (req, res) => {
  const { productId } = req.body;
  const { id } = req.params;
  try {
    await WishList.destroy({
      where: {
        UserId: id,
        ProductId: productId,
      },
    });
    let removeUp = await WishList.findOne({
      where: {
        UserId: id,
        ProductId: productId,
      },
    });
    res.status(200).json({ removeUp });
  } catch (err) {
    res.status(400).json({ msg: "Ah ocurrido un error" });
  }
};
module.exports = unFavorite;
