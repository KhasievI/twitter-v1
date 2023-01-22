const { Router } = require('express')
const { twittController } = require('../controllers/twitt.controlle')

const router = Router()

router.post('/twitt', twittController.addTwitt)
router.delete('/twitt/:id', twittController.deleteTwitt)
router.get('/twitt', twittController.getTwitts)
router.get('/twittByUser/:id', twittController.getTwittsByUserId)
router.patch('/twittLike/:id', twittController.likePost)
router.patch('/twittComment/:id', twittController.commentPost)



module.exports = router