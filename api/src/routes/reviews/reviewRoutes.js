const {Router} = require('express')
const getReviews = require('../../controllers/reviews/getReviews')
const getReviewById = require('../../controllers/reviews/getReviewById')
const postReview = require('../../controllers/reviews/postReview')
const router = Router()

router.get('/', getReviews)
router.get('/:id', getReviewById)
router.post('/create', postReview)
// router.put()
// router.delete()

module.exports = router