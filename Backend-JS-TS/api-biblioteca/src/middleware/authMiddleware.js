const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next) => {
    const header = req.headers.authorization

    if(typeof header !== 'string') return res.status(401).json({message: "authentication required"})

    const token = header.split(' ')[1]
    
    try {
        const user = jwt.verify(token, process.env.JWT_KEY,)
        if(!user) return res.status(404).json({message: "User not found"})
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({message: "Invalid token"})
    }

}

module.exports = authMiddleware