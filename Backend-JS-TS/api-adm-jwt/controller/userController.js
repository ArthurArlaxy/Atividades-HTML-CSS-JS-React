const users = require("../models/users")

const userController = {
    dashboard: (req, res) => {
        const user = req.authenticatedUser

        res.status(200).json({ message: `Você está na rota protegida, ${user.username || user}`})
    },
    admin: (req, res) => {
        const user = req.authenticatedUser
        res.status(200).json({message:`Você está na rota para Administradores, ${user.username}`,users})
    },registerAdm: (req, res) => {
        const { username, email, password } = req.body

        const exists = users.findIndex(user => user.email === email)

        if(!username || !email || ! password) {
            return res.status(400).json({ message: "All the fields have to be filled"})
        } else if(exists !== -1){
            return res.status(400).json({ message: "already exists an user with that email"})
        } 
        const newUser = { username, email, password, role: 'Administrator'}

        users.push(newUser)

        res.status(201).json(newUser)
    }
}

module.exports = userController