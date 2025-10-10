interface ProductInterface{
    id: number
    name: string
    description: string
    price: number
    stockQuantity: number
    createdAt: Date
    updatedAt: Date
}

export class Product {
    id: number
    name: string
    description: string
    price: number
    stockQuantity: number
    createdAt: Date
    updatedAt: Date

    constructor(productRow: ProductInterface){
        
    }
}