import { getClient, query } from "../database/query"
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
    product: Product
    quantity: Number | undefined
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
    customer: null |undefined | CustomerInterface 
    products: undefined | ProductsInterface[]

    constructor(orderAttributes: OrderInterface, customerAttributes?:CustomerInterface, orderProductAttributes?: ProductsInterface[]){
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
            JOIN customers ON WHERE customers.id = orders.customer_id
        `)
        return response.rows.map((row) => new Order(row))
    }

    static async create(customerId: Number, orderProducts:any ){
        const storedOrderProducts = await query(`
                SELECT * FROM products WHERE id = ANY($1::INT[]);
            `, [orderProducts.map((product:any) => product.id)])
        
        let orderTotal = 0
        const populatedOrderProduct = storedOrderProducts.rows.map((row) => {
            const { quantity } = orderProducts.find((product: Product) => product.id === row.id)
            orderTotal += + row.price * quantity
            return { product: new Product(row), quantity }
        })

        const dbClient = await getClient()
        let response
        try {
            await dbClient.query('BEGIN')
            
            const orderCreationResult = await dbClient.query(`
                    INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *);
                `,[customerId, orderTotal])

            const order = new Order(orderCreationResult.rows[0], undefined,populatedOrderProduct)

            for(const entry of populatedOrderProduct){
                await dbClient.query(`
                        INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3)
                    `,[order.id, entry.product.id, entry.quantity])
            }


            await dbClient.query('COMMIT')
            response = order
        } catch (error:any) {
            await dbClient.query('ROLLBACK')
            response = { message: `Error while creating order: ${error.message}`}
        }
        finally{
            await dbClient.release()   
        }

        return response
    }
}