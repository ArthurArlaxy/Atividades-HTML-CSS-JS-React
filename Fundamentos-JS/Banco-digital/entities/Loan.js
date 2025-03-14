const Installments = require("./Installment")

module.exports = class Loan {
    constructor(valor, parcelas){
        this.valor = valor
        this.parcelas = new Installments((valor*Loan.#tax)/parcelas,parcelas)
        this.date = new Date()
        }
    static #tax = 1.03

    static get tax(){
        return console.log(Loan.#tax)
    }

    static alterTax(tax){
        Loan.#tax = 1 + (tax/100)
    }
}
