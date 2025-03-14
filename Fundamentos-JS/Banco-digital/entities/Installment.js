module.exports = class Installments{
    constructor(valor,parcela, ) {
        this.valor = valor
        this.parcelas = parcela
        this.pendentes = parcela
        this.pago = 0
    }
}