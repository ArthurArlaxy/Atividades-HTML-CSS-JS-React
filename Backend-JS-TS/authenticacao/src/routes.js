const express = require('express')
const authController = require('./controller/authentication')
const { authMiddleware, adminMiddleware } = require('./middleware/authenticationMiddleware')

const router = express.Router()

router.get('/', authController.index)
router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/dashboard',authMiddleware, authController.dashboard)
router.get('/logout', authController.logout)
router.get('/dashboard/users', authMiddleware, adminMiddleware,  authController.users)

module.exports = router