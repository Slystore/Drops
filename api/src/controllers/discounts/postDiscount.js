const { Discounts } = require("../../db.js");

const postDiscount = async (req, res, next) => {

    const { discountBQ, quantity } = req.body
    
    try {
        let newDiscount = await Discounts.create({
            quantity, discounts: discountBQ
          });
          newDiscount ?
            res.status(200).json({ msg: "Discount creado con exito" }) :
            res.status(400).json({ msg: "Oops algo no ha salido bien, intente de nuevo" });
    } catch (error) {
        next(error)
    }
  };

module.exports = postDiscount