module.exports = errorMiddleware = (error, req, res, next) =>{
    if(error){
        if(error.status){
            return res.status(error.status).json(error.message)
        } else {
            return res.status(400).json(error.message)
        }
    } else {
        next()
    }
} 