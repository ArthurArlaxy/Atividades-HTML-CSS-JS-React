function authMiddleware(req,res,next){
    if(req.session.authenticated === false){
        return res.redirect('/')
    }

    next()
}

module.exports = {authMiddleware}