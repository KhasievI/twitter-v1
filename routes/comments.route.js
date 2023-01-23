const { Router } = require('express')
const { commentControler } = require('../controllers/comment.controller')

const router = Router()

router.post('/comment/:id', commentControler.addComment)
router.delete('/comment/:id', commentControler.deleteComment)
router.get('/comment', commentControler.getCommemt)

module.exports = router
