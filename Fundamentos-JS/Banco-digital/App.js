const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const User = require("./entities/User")

module.exports = class App{
    #users
    constructor() {
        this.#users = []
    }

    find(){
        return this.#users
    }

    createUser(username, email){
        const userExist = this.#users.find(e=> e.email === email)
        if(!userExist){
            const newUser = new User(username,email)
            this.#users.push(newUser)
        } else{
            console.log('Usuário existente')
        }
    }

    get getUsers(){
        return this.#users
    }

    getUserByEmail(email){
        return console.log(this.#users.find(e => e.email === email))
    }

    changeTax(tax){
        Loan.alterTax(tax)
    }

    newDeposit(email, valor){
        const userExist = this.#users.find(e=> e.email === email)
        if (userExist){
            const deposit = new Deposit(valor)
            userExist.account.newDeposit(valor)
        } else{
            console.log('Usuário não cadastrado!')
        }
    }

    transfer(email, valor, recebedor){
        const pagadorExist = this.#users.find(e => e.email === email)
        const recebedorExist = this.#users.find(u => u.username === recebedor)
        if(pagadorExist && recebedorExist){
            pagadorExist.account.newTransfer(pagadorExist,valor,recebedorExist)
        }
    }

    newLoan(email, valor ,parcelas){
        const userExist = this.#users.find(e=> e.email === email)
        if (userExist){
            userExist.account.newLoan(userExist,valor,parcelas)
        }
    }
    
    showExtract(email){
        const userExist = this.#users.find(e=> e.email === email)
        if (userExist){
            console.log( userExist.account)
        }
    }
    
    showAmount(email){
        const userExist = this.#users.find(e=> e.email === email)
        if (userExist){
            console.log(`Seu Saldo é de R$${userExist.account.saldo}`)
        }
    }

    showInstallment(email){
        const userExist = this.#users.find(e=> e.email === email)
        if (userExist){
            console.log(userExist.account.loan)
        }
    }

    payLoan(email){
        const userExist = this.#users.find(e=> e.email === email)
        const loanPayment = userExist.account.loan[0].parcelas.valor
        userExist.account.payLoan(userExist,loanPayment)
    }   
}