const { Reviews } = require('../../db')

const deleteReview = async (req, res, next) => {
    try {
        let {id} = req.params
        id = parseInt(id)
         await Reviews.destroy({
            where: { id }
        })

        res.json({ message: 'The review has been deleted'})

    } catch (error) {
        next(error)
    }
}

module.exports = deleteReview