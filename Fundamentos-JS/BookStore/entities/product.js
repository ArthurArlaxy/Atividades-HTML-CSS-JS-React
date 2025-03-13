module.exports = class Product {
    constructor(name, description, price, inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }
    addToStock(Qtd){
        this.inStock += Qtd
    }
    removeFromStock(Qtd){
        this.inStock -= Qtd
    }
}