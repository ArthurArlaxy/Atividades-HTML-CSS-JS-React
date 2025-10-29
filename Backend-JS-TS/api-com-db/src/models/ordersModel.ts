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
    quantity: Number 
}

interface CustomerInterface {
    name: String 
    id: Number | undefined
    email: String | undefined
    password: String | null
}


export class Order{
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
                customers.id as "user.id",
                customers.name as "user.name",
                customers.email as "user.email"
            FROM orders
            JOIN customers ON customers.id = orders.customer_id;
        `)
        return response.rows.map((row) => {

            const customer = new Customers({
                id:row["user.id"],
                name:row["user.name"],
                email:row["user.email"],
                password:null,
            })  

            return new Order(row, customer)
        })
    }

    static async create(customerId: Number, orderProducts:any ){
        const storedOrderProducts = await query(`
                SELECT * FROM products WHERE id = ANY($1::INT[]);
            `, [orderProducts.map((product:any) => product.id)])

            console.log(storedOrderProducts)
        
        let orderTotal = 0
        const populatedOrderProduct = storedOrderProducts.rows.map((row) => {
            const { quantity } = orderProducts.find((product: Product) => product.id === row.id)

            orderTotal += row.price * quantity
            console.log(orderTotal)
            return { product: new Product(row), quantity }
        })

        const dbClient = await getClient()
        console.log(populatedOrderProduct)
        let response
        try {
            await dbClient.query('BEGIN')
            
            const orderCreationResult = await dbClient.query(`
                    INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *;
                `,[customerId, orderTotal])

            const order = new Order(orderCreationResult.rows[0], undefined,populatedOrderProduct)

            for(const entry of populatedOrderProduct){
                await dbClient.query(`
                        INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);
                    `,[order.id, entry.product.id, entry.quantity])
            }


            await dbClient.query('COMMIT;')
            response = order
        } catch (error:any) {
            await dbClient.query('ROLLBACK;')
            response = { message: `Error while creating order: ${error.message}`}
        }
        finally{
            await dbClient.release()   
        }

        return response
    }

    static async findById(id:number){
        const response = await query(`
            SELECT orders.*, 
                customers.id as "user.id",
                customers.name as "user.name",
                customers.email as "user.email",
                order_products.quantity,
                products.id as "products.id",
                products.name as "products.name",
                products.description as "products.description",
                products.price as "products.price",
                products.stock_quantity as "products.stock_quantity",
                products.is_active as "products.is_active",
                products.created_at as "products.created_at",
                products.updated_at as "products.updated_at"
            FROM orders
            JOIN customers ON customers.id = orders.customer_id
            JOIN order_products ON orders.id = order_products.order_id
            JOIN products ON order_products.product_id = products.id
            WHERE orders.id = $1;
        `,[id])

        const row = response.rows[0]

        const customer = new Customers({
                id:row["user.id"],
                name:row["user.name"],
                email:row["user.email"],
                password:null,
            })  

        const product = new Product({
            id:row["products.id"],
            name:row["products.name"],
            description:row["products.description"],
            price:row["products.price"],
            stock_quantity:row["products.stock_quantity"],
            is_active:row["products.is_active"],
            created_at:row["products.created_at"],
            updated_at:row["products.updated_at"]
        })

        return new Order(row, customer, [{ product:product, quantity: row.quantity}])
    }

    static async delete(id:number){
        const dbClient = await getClient()
        let result
        try {
            await dbClient.query(`BEGIN`)
            const orderDeleted = this.findById(id)
            await query(`DELETE FROM  order_products WHERE order_id = $1`,[id])
            await query(`DELETE FROM  orders WHERE id = $1`,[id])
            await dbClient.query(`COMMIT`)
            result = orderDeleted
        } catch (error) {
            await dbClient.query(`ROLLBACK`)
            result = { message: `error while delete this order: ${error}`}
        } finally{
            dbClient.release()
        }
        return result
    }
}