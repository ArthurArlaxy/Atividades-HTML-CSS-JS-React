const express = require('express')
const usersController = require('./controller/usersController')
const authMiddleware = require('./middleware/authMiddleware')
const router = express.Router()

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/',authMiddleware, )

module.exports = router