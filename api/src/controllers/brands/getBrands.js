const { Brand } = require('../../db.js');

const getBrands = async(req, res, next) => {
    try {
        const allBrands = await Brand.findAll({});
        return res.status(200).json(allBrands);
    } catch (err) {
        next(err)
    }
};

module.exports = getBrands