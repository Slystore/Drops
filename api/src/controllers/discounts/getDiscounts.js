const { Discounts } = require("../../db.js");


const getDiscounts = async (req, res, next) => {
    try {
        const discountsQuery = await Discounts.findAll();
        discountsQuery ? 
        res.status(200).json(discountsQuery) :
        res.status(404).json({msge: 'An error has occured!'})
    } catch (err) {
        next(err)
    }
};

module.exports = getDiscounts;