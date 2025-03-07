class Product {
    constructor(name,description,price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantities){
        this.inStock += quantities
        return console.log(`A quantidade de ${this.name}:` +this.inStock)
    }
    calculateDiscount(discount){
        let newPrice  = this.price - (this.price * (discount/100))
        return console.log(`O preço de ${this.name} com desconto aplicado é: R$` + newPrice.toFixed(2))
    }
}

const pcGamer = new Product("Pc gamer", "Pc com RTX 3090", 6000)

console.log(pcGamer)
pcGamer.addToStock(4)
pcGamer.calculateDiscount(30)