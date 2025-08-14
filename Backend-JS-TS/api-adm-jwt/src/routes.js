const express = require('express')
const authController = require('../controller/authController')
const authMiddleware = require('../middleware/authMiddleware')
const userController = require('../controller/userController')
const admMiddleware = require('../middleware/admMiddleware')

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/dashboard', authMiddleware, userController.dashboard)
router.get('/admin', authMiddleware, admMiddleware, userController.admin)
router.post('/registerAdm',authMiddleware, admMiddleware, userController.registerAdm)

module.exports = router