const { ProductSize } = require("../../db.js");


const getStockByProductSize = async(req, res, next) => {
    try {
        const id = req.params.id;
        const { SizeId} = req.body;
        const productSizeByStock = await ProductSize.findOne({
            where: {
                ProductId: id,
                SizeId: SizeId
            },
        });
        res.status(200).json(productSizeByStock);
    } catch (error) {
        next(error);
    }
};

module.exports = getStockByProductSize;