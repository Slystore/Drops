const { Product, Size, Brand, Category, ProductSize, Reviews } = require("../../db.js");


const getProductById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const productById = await Product.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Brand,
                        attributes: {
                        exclude: ['id']
                    },
                },
                {
                    model: Category,
                    attributes:{
                        exclude: ['id']
                    }
                },
                {
                    model: Size,
                    through: {
                        model: ProductSize,
                        attributes:{
                            exclude: ['SizeId', 'ProductId']
                        }
                    },
                },
                {
                    model: Reviews,
                }
            ],
        });
        res.status(200).json(productById);
    } catch (error) {
        next(error);
    }
};

module.exports = getProductById;