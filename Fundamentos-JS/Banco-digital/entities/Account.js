const Deposit = require("./Deposit.js")
const Loan = require("./Loan.js")
const Transfer = require("./Transfer.js")

module.exports = class Account{
    #saldo
    constructor(saldo) {
        this.#saldo = saldo
        this.deposit = []
        this.loan = []
        this.transfer = []

    }
    get saldo() {
        return this.#saldo
    }

    newDeposit(valor){
        this.#saldo += valor
        let deposit = new Deposit(valor)
        this.deposit.push(deposit)
    }

    newLoan(user, valor,parcelas){
        if (this.loan < 1){
        user.account.#saldo += valor
        let loan = new Loan(valor,parcelas)
        user.account.loan.push(loan)
        } else {
            console.log('Termine de pagar seu empréstimo')
        }
    }

    newTransfer(pagante,valor,recebedor){
        pagante.account.#saldo -= valor
        let pay = new Transfer(pagante.username,valor,recebedor.username)
        pagante.account.transfer.push(pay)
        recebedor.account.#saldo += valor 
        let received = new Transfer(pagante.username,valor,recebedor.username)
        recebedor.account.transfer.push(received)
    }

    payLoan(usuario,loanPayment){
        usuario.account.#saldo -= loanPayment
        usuario.account.loan[0].parcelas.pendentes -= 1
        usuario.account.loan[0].parcelas.pago += 1
        this.payedLoan(usuario)
    }

    payedLoan(usuario){
        if (usuario.account.loan[0].parcelas.pendentes === 0 ){
            usuario.account.loan = []
        }
    }
}