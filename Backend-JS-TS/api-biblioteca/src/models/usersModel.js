const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { id:'1', name:'Arthur Albuquerque', email:'arthur@gmail.com', password:'1234'}
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
            password: bcrypt.hashSync(password,10)
        }
        
        users.push(newUser)
        return newUser
    }
}