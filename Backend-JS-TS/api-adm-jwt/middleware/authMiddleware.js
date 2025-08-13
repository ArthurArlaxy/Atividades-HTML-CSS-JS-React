const authMiddleware = (req, res, next) =>{
    const authHeader =  req.headers.authorization

    

    const token = authHeader.splice(' ')[1]
}

module.exports = authMiddleware