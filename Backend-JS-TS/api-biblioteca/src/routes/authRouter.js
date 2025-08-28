const express = require('express')
const usersController = require('../controller/usersController')
const authRouter = express.Router()


authRouter.post('/register', usersController.register)
authRouter.post('/login', usersController.login)

module.exports = authRouter