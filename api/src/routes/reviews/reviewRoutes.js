const {Router} = require('express')
const getReviews = require('../../controllers/reviews/getReviews')
const getReviewById = require('../../controllers/reviews/getReviewById')
const postReview = require('../../controllers/reviews/postReview')
const updateReview = require('../../controllers/reviews/updateReview')
const deleteReview = require('../../controllers/reviews/deleteReview')
const router = Router()

router.get('/', getReviews)
router.get('/:id', getReviewById)
router.post('/create', postReview)
router.put('/update/:id', updateReview)
router.delete('/delete/:id', deleteReview)

module.exports = router