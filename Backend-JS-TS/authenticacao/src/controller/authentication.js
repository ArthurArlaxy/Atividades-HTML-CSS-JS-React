const session = require('express-session');
const users = require('../models/modelUSer');


const authController = {
    index: (req, res) =>{
        res.render('index')
    },
    login: (req, res) => {
        const { username, password } = req.body;

        const user = users.find(user => user.username === username);

        if (!user) {
            return res.redirect('/');
        }

        if (user.password === password) {
            req.session.currentUser = user;
            req.session.authenticated = true;
            return res.redirect('/dashboard'); 
        } else {
            return res.redirect('/'); 
        }
    },
    register: (req, res) =>{
        const { username, password } = req.body;

        const user = users.find(user => user.username === username);

        if (user) {
            return res.redirect('/');
        }

        const newUser = {
            username,
            password,
            role: "Standard"
        }
        
        users.push(newUser)

        req.session.currentUser = newUser;
        req.session.authenticated = true;
        return res.redirect('/dashboard'); 
    },
    dashboard: (req, res) => {
        res.render('dashboard', { user: req.session.currentUser})
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    },
    users: (req, res) => {
        res.render('users', { users, user: req.session.currentUser })
    }
}

module.exports = authController;
