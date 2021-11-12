const { WishList } = require("../../db");
const unFavorite = async (req, res) => {
  const  favorite  = req.body;
  const {productId} = req.body
  const {id} = req.params
  let remove = await  WishList.update(favorite,{
    where: {
      UserId: id,
      ProductId:productId
    },
  });
  let removeUp = await WishList.findOne({
    where:{
      UserId:id,
      ProductId:productId
    }
  })
  remove[0] !== 0 ? res.status(200).json({removeUp}): res.status(400).json({msg: "Ah ocurrido un error"})
};
module.exports = unFavorite;
