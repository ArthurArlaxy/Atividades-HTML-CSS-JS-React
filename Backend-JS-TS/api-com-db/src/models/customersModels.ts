import { query } from "../database/query"

interface CustomersInterface{
    id: number
    name: string
    email: string
}
interface CreateCustomersInterface{
    name: string
    email: string
}

export class Customers {
    id: number
    name: string
    email: string

    constructor(customersAttributes: CustomersInterface){
        this.id = customersAttributes.id
        this.name = customersAttributes.name
        this.email = customersAttributes.email
    }

    async findAll() {
        const customers = await query(`
            SELECT * FROM customers 
        `)

        return customers.rows.map((customer) => {new Customers(customer)})
    }

    async findByID(id:number){
        const customer = await query(`
            SELECT * FROM customers where id = $1
        `,[id])

        if( customer.rowCount === 0 ){
            return null
        }

        return new Customers(customer.rows[0])
    }

    async create(customerAttribute: CreateCustomersInterface){
        const newCustomer = await query(`
            INSERT INTO customers (name, email) VALUES ($1,$2) RETURNING *
            `,[customerAttribute.name, customerAttribute.email])

        return new Customers(newCustomer.rows[0])
    }
}