const prompt = require('prompt-sync')()

class User{
    constructor(fullName,email,password){
        this.fullName = fullName
        this.email = email
        this.password = password
    }
    
    login(){
        let cadEmail = prompt(`Digite seu email: `)
        let cadPassword = prompt(`Digite sua Senha: `)

        if (cadEmail === this.email && cadPassword === this.password){
            console.log(`O cadastro de ${this.fullName} foi realizado`)
        } else {
            console.log(`Senha e/ou email inválidos`)
        }
    }
}

const arlaxy = new User("Arthur Albuquerque Amancio de Oliveira", "arthuraadeoliveira@gmail.com", "Arthur 1801")

arlaxy.login()