const { Reviews, Users, Products} = require('../../db')

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
                ]
            })
            return res.json(reviewsByProduct)
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
            const reviewsQuery = await Reviews.findAll()
            res.json(reviewsQuery)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = getReviews