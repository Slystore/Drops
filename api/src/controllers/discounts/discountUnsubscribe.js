const { Product } = require("../../db.js");

const discountUnsubscribe = async (req, res, next) => {

    const { id } = req.params
    console.log(id)
    // day=**, discount=integer
    
    try {
        
        const products = await Product.update({
            onSale: false,
            Discounts: null,
            discountDay: null
        },{
            where: {
                id
            }
        })
        console.log(products)
        products ?
        res.json({mssge: 'The discount has been undone'}) :
        res.status(404).json({mssge: 'Houston we have a problem'})
    } catch (error) {
        next(error)
    }
  };

module.exports = discountUnsubscribe