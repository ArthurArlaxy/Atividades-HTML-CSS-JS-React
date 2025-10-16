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
        const { id } = req.params
        const customer = await Customers.findByID(Number(id))

        if(!customer) res.status(404).json({message: "Customer not found!"})

        res.json(customer)
    }
    // POST /customers
    static create: Handler = async (req, res) => {
        const { name, email, password } = req.body
        
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string"){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        
        const customer = await Customers.create({name, email,password})

        if(!customer){
            return res.status(400).json({message: "Invalid Credentials"})            
        }

        res.json(customer)
    }
    // PUT /customers/:id
    static update: Handler = async (req, res) => {

    }
    // DELETE /customers/:id
    static delete: Handler = async (req, res) => {
        const { id } = req.params
        const customer = await Customers.delete(Number(id))

        if(!customer) res.status(404).json({message: "Customer not found!"})

        res.json(customer)
    } 
}