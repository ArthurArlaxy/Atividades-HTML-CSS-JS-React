function authMiddleware(req,res,next){
    if(req.session.authenticated === true){
        return next()
    }

    res.redirect('/')
}

function adminMiddleware(req, res, next){
    console.log(req.session.currentUser.role)
    if (req.session.currentUser.role === 'Admin'){
        return next()
    }

    res.redirect('/dashboard')
}

module.exports = {authMiddleware, adminMiddleware}