const { ProductSize } = require("../../db.js");


const getProductSizeById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const productSizeById = await ProductSize.findAll({
            where: {
                ProductId: id,
            },
        });
        res.status(200).json(productSizeById);
    } catch (error) {
        next(error);
    }
};

module.exports = getProductSizeById;