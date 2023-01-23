const { Router } = require('express')
const { twittController } = require('../controllers/twitts.controller')

const router = Router()

router.post('/twitt', twittController.addTwitt)
router.delete('/twitt/:id', twittController.deleteTwitt)
router.get('/twitt', twittController.getTwitts)
router.get('/twittByUser/:id', twittController.getTwittsByUserId)
router.patch('/twittLike/:id', twittController.likePost)



module.exports = router