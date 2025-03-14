module.exports = class Transfer {
    constructor(pagante,valor,recebedor) {
        this.pagante = pagante
        this.valor = valor
        this.recebedor = recebedor
        this.date = new Date()
    }
}