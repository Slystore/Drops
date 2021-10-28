const { Reviews, Users, Products} = require('../../db')

const updateReview = async (req, res, next) => {
    try {
        const { comment, rating } = req.body
        const { id } = req.params
        console.log('esto llega por body a update', req.body)
        console.log('esto llega de id ', id )

        await Reviews.update({ comment, rating }, {
            where: { id }
        })

        res.json({ message: 'The review has been updated!'})

    } catch (error) {
        next(error)
    }
}

module.exports = updateReview