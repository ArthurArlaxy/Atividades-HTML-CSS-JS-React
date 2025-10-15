import { Handler } from "express";
import { Customers } from "../models/customersModels";

export class CustomersControllers{
    // GET /customers
    static customers: Handler = async (req, res) => {
        const customers = await Customers.findAll()
        res.json(customers)
    }
    // GET /customers/:id
    static customer: Handler = async (req, res) => {
        const { id } = req.body
        const customer = await Customers.findByID(id)

        if(!customer) res.status(404).json({message: "Customer not found!"})

        res.json(customer)
    }
    // POST /customers
    static create: Handler = async (req, res) => {
        const { name, email, password } = req.body
        
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string"){
            res.status(400).json({message: "Invalid Credentials"})
        }
        
        const customer = Customers.create({name, email,password})
        res.json(customer)
    }
    // PUT /customers/:id
    static update: Handler = async (req, res) => {

    }
    // DELETE /customers/:id
    static delete: Handler = async (req, res) => {

    } 
}