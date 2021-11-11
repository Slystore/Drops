const {WishList} = require('../../db')
const getWishListId = async (req,res)=> {
    const {id} = req.params
 const userWish = await WishList.findAll({
     where:{
         UserId: id 
     }
 })
 if(userWish){
     return res.status(200).json(userWish)
 }
}
module.exports=getWishListId;