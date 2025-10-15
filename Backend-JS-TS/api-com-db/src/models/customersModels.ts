import { query } from "../database/query"

interface CustomersInterface{
    id: number
    name: string
    email: string
    password: string
}
interface CreateCustomersInterface{
    name: string
    email: string
    password: string
}

export class Customers {
    id: number
    name: string
    email: string
    password: string

    constructor(customersAttributes: CustomersInterface){
        this.id = customersAttributes.id
        this.name = customersAttributes.name
        this.email = customersAttributes.email
        this.password = customersAttributes.password
    }

    static async findAll() {
        const customers = await query(`
            SELECT * FROM customers 
        `)

        return customers.rows.map((customer) => {
            return new Customers(customer)
        })
    }

    static async findByID(id:number){
        const customer = await query(`
            SELECT * FROM customers where id = $1
        `,[id])

        if( customer.rowCount === 0 ){
            return null
        }

        return new Customers(customer.rows[0])
    }

    static async create(customerAttribute: CreateCustomersInterface){
        const newCustomer = await query(`
            INSERT INTO customers (name, email, password) VALUES ($1,$2,$3) RETURNING *
            `,[customerAttribute.name, customerAttribute.email, customerAttribute.password])

        return new Customers(newCustomer.rows[0])
    }
}