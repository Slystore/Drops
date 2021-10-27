const { Reviews, Users, Products} = require('../../db')

const postReview = async (req, res, next) => {
    try {
        const { comment, rating, user } = req.body

        const userQuery = await Users.findOne({
            where: { id: user }
        })

        const reviewCreation = await Reviews.create({ comment, rating })

        userQuery.addReviews(reviewCreation)

        res.json({ message: 'Thanks for the review!'})

    } catch (error) {
        next(error)
    }
}

module.exports = postReview