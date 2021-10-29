const { Reviews, Users, Products, Brand, Category, Size} = require('../../db')
// const { Brand, Category, Product, Size } = require("../../../db.js");

const getReviews = async (req, res, next) => {
    try {
        const { product, user } = req.query
        if(product){
            const reviewsByProduct = await Reviews.findAll({
                include:[
                    {
                        model: Products,
                        where: {
                            id: product
                        }
                    }
                ],
            })
            res.json(reviewsByProduct)
        }
        else if(user){
            const reviewsByUser = await Reviews.findAll({
                include:[
                    {
                        model: Users,
                        where: {
                            mail: user
                        }
                    }
                ]
            })
            return res.json(reviewsByUser)
        }
        else{
            const { page, size} = req.query;
            
            const reviewsQuery = await Reviews.findAll({
                limit: size,
                offset: page * size
            })
            res.json(reviewsQuery)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = getReviews