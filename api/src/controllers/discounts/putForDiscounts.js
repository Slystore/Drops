const { Product } = require("../../db.js");

const putForDiscounts = async (req, res, next) => {

    // day=**, discount=integer
    const data = req.body
    const { day, discount, target } = req.body
    const [ref,,id] = target
    try {
        
    if(ref === 'marca'){
        const products = await Product.update({
            onSale: true,
            Discounts: discount,
            discountDay: day
        },{
            where: {
                BrandId: id
            }
        })
        res.json(products)
    }
    else if(ref === 'categoria'){
        const products = await Product.update({
            onSale: true,
            Discounts: discount
        },{
            where: {
                CategoryId: id
            }
        })
        res.json(products)

    }
    } catch (error) {
        next(error)
    }
  };

module.exports = putForDiscounts
