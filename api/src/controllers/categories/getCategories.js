const { Category } = require('../../db.js');

const getCategories = async(req, res, next) => {
    try {
        const allCategories = await Category.findAll({});
        return res.status(200).json(allCategories);
    } catch (err) {
        next(err)
    }
};

module.exports = getCategories