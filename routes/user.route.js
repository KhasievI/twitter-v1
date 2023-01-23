const { Router } = require('express')
const { userController } = require('../controllers/users.controller')

const router = Router()

router.post('/user', userController.addUser)
router.get('/user', userController.getUsers)
router.patch('/saving/:id', userController.addSaves)


module.exports = router

