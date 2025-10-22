import { query } from "../database/query"
import { Customers } from "./customersModels"
import { Product } from "./productsModels"

interface OrderInterface{
    id: Number
    customer_id: Number
    total: Number
    created_at: Date
    updated_at: Date
}

interface ProductsInterface{
    id: Number
    name: String 
    description: String 
    price: Number
    stock_quantity: Number
    created_at: Date | undefined
    updated_at: Date | undefined
    is_active: Boolean
}

interface CustomerInterface {
    name: String 
    id: Number | undefined
    email: String | undefined
    password: String | undefined
}


class Order{
    id: Number
    customerId: Number
    total: Number
    createdAt: Date
    updatedAt: Date
    customer: undefined | CustomerInterface
    products: undefined | [ProductsInterface]

    constructor(orderAttributes: OrderInterface, customerAttributes?:CustomerInterface, orderProductAttributes?: [ProductsInterface]){
        this.id = orderAttributes.id
        this.customerId = orderAttributes.customer_id
        this.total = +orderAttributes.total
        this.createdAt = new Date(orderAttributes.created_at)
        this.updatedAt = new Date(orderAttributes.updated_at)

        this.customer = undefined
        if(customerAttributes){
            this.customer = customerAttributes
        }

        this.products = undefined
        if(orderProductAttributes){
            this.products = orderProductAttributes
        }
    }

    static async findAll(){
      const response = await query(`
            SELECT orders.*, 
                customers.name as user_name,
                customers.email as user_email
            FROM orders
            JOIN customers ON WHERE customers.id = orders.id
        `)
        return response.rows.map((row) => new Order(row))
    }

    static async create(customerId: Number, orderProducts:any ){
        const storedOrderProducts = await query(`
                SELECT * FROM products WHERE id = ANY($1::INT[]);
            `, [orderProducts.map((product:any) => product.id)])
    }
}