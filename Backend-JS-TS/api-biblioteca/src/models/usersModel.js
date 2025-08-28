const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { id:'1', name:'Arthur Albuquerque', email:'arthur@gmail.com', password:'$2b$10$UdJ3oTxY7IQ5xbMfCJK4Xu.82y2xQPbPU.SjbR7Sq2HWjpBAp5jc6', role:'Admin'}
]

module.exports = {
    getAllUsers: () => users,

    getUserByEmail:(email) => users.find(user => user.email === email),

    getUserById:(id) => users.find(user => user.id === id),

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password,10),
            role:'Standard'
        }
        
        users.push(newUser)
        return newUser
    }
}