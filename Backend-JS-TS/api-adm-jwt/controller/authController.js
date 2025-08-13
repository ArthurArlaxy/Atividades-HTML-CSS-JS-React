const users = require("../models/users")
const jwt = require('jsonwebtoken')

const secretKey = 'secret'

const authController = {
    register: (req, res) => {
        const { username, email, password } = req.body

        const exists = users.findIndex(user => user.email === email)

        if(exists !== -1){
            res.status(400).json({ message: "already exists an user with that email"})
        } else if(!username || !email || ! password) {
            res.status(400).json({ message: "All the fields have to be filledd"})
        }
        const newUser = { username, email, password, role: 'Standard'}

        users.push(newUser)

        res.status(201).json(newUser)
    },
    login: (req, res) => {
                const {email, password } = req.body

        const user = users.find(user => user.email === email)

        if(!user){
            res.status(400).json({ message: "Invalid Credentials"})
        } else if( !email || ! password) {
            res.status(400).json({ message: "All the fields have to be filled"})
        }

        const token = jwt.sign(user, secretKey, { expiresIn: "1h"})

        res.status(200).json(token)
    }
}

module.exports = authController