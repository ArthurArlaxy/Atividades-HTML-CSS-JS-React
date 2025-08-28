const express = require('express')
const usersController = require('../controller/usersController')
const authMiddleware = require('../middleware/authMiddleware')
const authRouter = express.Router()


authRouter.post('/register', usersController.register)
authRouter.post('/login', usersController.login)
authRouter.get('/index',authMiddleware )

module.exports = authRouter