const jwt = require('jsonwebtoken')
const usersModel = require("../models/usersModel")

const usersController = {
    register: (req, res) => {
        const {name, email, password} = req.body

        if( typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
            return res.status(400).json({message:"invalid credentials"})
        } 

        const existUser = usersModel.getUserByEmail(email)
        if(existUser) return res.status(400).json('User already exists')

        const newUser = usersModel.createUser(name,email,password)
        res.json({...newUser,password:undefined})
    },
    login: (req, res) => {
        const {email, password} = req.body

        if(typeof email !== 'string' || typeof password !== 'string'){
            return res.status(400).json({message:"invalid credentials"})
        }
        
        const user = usersModel.getUserByEmail(email)
        if(!user) return res.status(400).json('User not exists')
        
        const payload = {id:user.id, name:user.name, email:user.email}
        const token = jwt.sign(payload,process.env.JWT_KEY, {expiresIn: '1d'})
        
        res.json(token)
    }
}

module.exports = usersController