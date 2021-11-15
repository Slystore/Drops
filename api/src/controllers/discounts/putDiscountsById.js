const { Product } = require("../../db.js");

const putDiscountsById = async (req, res, next) => {

    const { id } = req.params
        
    const { porcentage } = req.body
    
    try {
        
        const products = await Product.update({
            onSale: true,
            Discounts: porcentage,
            discountDay: null
        },{
            where: {
                id
            }
        })

        products ? 
        res.json({ mssge: 'The products discounts has been updated'}) :
        res.status(404).json({ mssge: 'A problem has occured!'})
    
    } catch (error) {
        next(error)
    }
  };

module.exports = putDiscountsById