const jwt = require('jsonwebtoken')
const users = require('../models/users')

const secretKey = 'secret'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(400).json({ message: "Login required" })
    }

    const token = authHeader.split(' ')[1]
    
    try {
        const decodedToken = jwt.verify(token, secretKey)
        console.log(decodedToken)
        const user = users.find(user => user.username === decodedToken.username)
        
        if (!user){
            return res.status(401).json({ message: "Invalid user"})
        }

        req.authenticatedUser = user 

        next()
    } catch (error) {
        res.status(400).json({ message: "Invalid token"})
    }

    next()
}

module.exports = authMiddleware