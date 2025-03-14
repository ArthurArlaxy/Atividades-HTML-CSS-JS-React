const Account = require("./Account")

module.exports = class User {
    constructor(username,email){
        this.username = username
        this.email = email
        this.account = new Account(0)
    }
}