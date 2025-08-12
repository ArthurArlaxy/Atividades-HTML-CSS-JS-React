const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken')

const apiRouter = express.Router()

apiRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username
    res.status(200).json({ message: `Você está na rota protegida, ${username}`})
})

module.exports = apiRouter

