const { Reviews } = require('../../db')

const getReviewById = async (req, res, next) => {
    try {
        const reviewsQuery = await Reviews.findByPk(req.params.id)
        res.json(reviewsQuery)
    } catch (error) {
        next(error)
    }
}

module.exports = getReviewById