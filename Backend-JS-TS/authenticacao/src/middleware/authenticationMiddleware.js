function authMiddleware(req,res,next){
    if(req.session.authenticated === true){
        return next()
    }

    res.redirect('/')
}

module.exports = {authMiddleware}