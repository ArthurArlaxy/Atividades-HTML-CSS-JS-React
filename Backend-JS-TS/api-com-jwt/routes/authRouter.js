const express = require('express')
const jwt = require('jsonwebtoken')
const users = require('../models/users')

const secretKey = 'secret'

const authRouter = express.Router()

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body

    const user = { username, password }

    users.push(user)
    
    res.status(201).json(user)
})

authRouter.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(user => user.username === username)
    
    if (!user || user.password !== password){
        res.status(400).json('Invalid credentials')
    }

    const token = jwt.sign(user, secretKey,{ expiresIn : '1h' })

    res.status(200).json(token)
})

module.exports = authRouter

