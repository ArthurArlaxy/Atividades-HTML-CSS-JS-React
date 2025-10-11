import { Handler } from "express";
import { CreateProductInterface, Product } from "../models/productsModels";
import { json } from "stream/consumers";

export class productsController {
    // GET /products
    static products: Handler = async (req, res) => {
        const response = await Product.findAll()
        return res.json(response)
    }
    // POST /products
    static product: Handler = async (req, res) => {
        const { id } = req.params
        const response = await Product.findById(Number(id))
        
        if(!response){
            res.status(404).json({ message: "Product not found"})
        }

        res.json(response)
    }
    // GET /products/:id
    static create: Handler = async (req, res) => {
        const { name, description, price, stockQuantity, isActive } = req.body

        if (typeof name !== "string" ||
            typeof description !== "string" ||
            typeof price !== "number" ||
            typeof stockQuantity !== "number" ||
            typeof isActive !== "boolean") {
            return res.json({ message: "Invalid data" })
        }
        const response = await Product.create({ name, description, price, stockQuantity, isActive })
        res.json(response)
    }
    // PUT /products/:id
    static update: Handler = async (req, res) => {
        const { id } = req.params
        const { name, description, price, stockQuantity, isActive } = req.body

        if (
            (typeof name !== "string" && name) ||
            (typeof description !== "string" && description) ||
            (typeof price !== "number" && price) ||
            (typeof stockQuantity !== "number" && stockQuantity) ||
            (typeof isActive !== "boolean" && isActive) 
        ){
            return res.json({ message: "Invalid data" })
        }

        const response = await  Product.update(Number(id), { name, description, price, stockQuantity, isActive })
        res.json(response)
    }
    // DELETE /products/:id
    static delete: Handler = async (req, res) => {
        const { id } =  req.params
        const response = await Product.delete(Number(id))

        if (!response){
            res.status(404).json({ message: "Product not found"})
        }

        res.json(response)
    }
}