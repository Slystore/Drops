const { Product, Size, Brand, Category, ProductSize, Reviews } = require("../../db.js");
const { Op } = require("sequelize");


const handleWhere = (queryParams) => {
    let data = {};
    if (queryParams.hasOwnProperty('name')) {
        data.name = {
            [Op.iLike]: `%${queryParams.name}%`,
        }
    }
    return data;
};

const handleBrandsWhere = (queryParams) => {
    let data = {};
    if (queryParams.hasOwnProperty('Brand')) {
        data.name = {
            [Op.eq]: queryParams.Brand
        }
    }
    return data;
}

const handleCategoriesWhere = (queryParams) => {
    let data = {};
    if (queryParams.hasOwnProperty('Category')) {
        data.name = {
            [Op.eq]: queryParams.Category
        }
    }
    return data;
}


const getProducts = async(req, res, next) => {
    const filters = req.query; // { title: 'free'} => es un objeto que contiene todo los query.params.
    try {
        const allProducts = await Product.findAll({
            include: [
                {
                    model: Brand,
                    where: handleBrandsWhere(filters),
                        attributes: {
                        exclude: ['id']
                    },
                },
                {
                    model: Category,
                    where: handleCategoriesWhere(filters),
                    attributes:{
                        exclude: ['id']
                    }
                },
                {
                    model: Size,
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: Reviews,
                }
            ],
            where: handleWhere(filters),
            //NO BORRAR EL SIGUIENTE COMENTARIO QUE ES PARA EL FILTRO POR TITLE Y GENRE
            // include: [{
            //     model: genres,
            //     // where: handleGenresWhere(filters),
            //     attributes: ["name"],
            //     through: { attributes: [] },
            // }],
            // where: handleWhere(filters),
        });
        return res.status(200).json(allProducts);
    } catch (err) {
        next(err)
    }
};

module.exports = getProducts;