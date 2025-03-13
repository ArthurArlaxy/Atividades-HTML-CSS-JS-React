class Ticket{
    constructor(quantities,type) {
        this.type = type
        this.quantities = quantities
        this.setPrice = this.type
        this.total = (quantities * Ticket.price) + (quantities * Ticket.baseTax)
    }
    static baseTax = 4
    static price = 100

    set setPrice(type){
        if (type === 1){
            Ticket.price = 50
        }else {
            Ticket.price = 100
        }
    }

    static get premiumTicket(){
        return console.log(`O preço do ingresso premium é ${Ticket.price * 2}`)
    }
}

Ticket.premiumTicket

const gameFlamengo = new Ticket(3,1)
console.log(gameFlamengo)

const gameVasco = new Ticket(1,0)
console.log(gameVasco)
