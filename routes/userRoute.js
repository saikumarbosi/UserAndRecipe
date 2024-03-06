const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.get('/users', userController.getUser)


module.exports = router
