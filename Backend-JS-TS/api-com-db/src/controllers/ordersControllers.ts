import { Handler } from "express";
import { Order } from "../models/ordersModel";

export class ordersControllers{
    //GET /orders
    static index: Handler = async (req, res) => {
        const order = await Order.findAll()
        res.json(order)
    }
    //POSR /orders
    static create: Handler = async (req, res) => {
        const { customerId, products } = req.body
        const newOrder =  await Order.create(+customerId, products)

        if(!(newOrder instanceof Order)){
            return res.status(400).json(newOrder)
        }

        res.json(newOrder)
    }
    static order: Handler = async (req, res) => {
        const { id } = req.params
        
        if(!id){
            return res.status(400).json({ message:"Invalid Id"})
        }

        const order = await Order.findById(+id)
        res.json(order)
    }

    static delete: Handler = async (req, res) => {
        const { id } = req.params
        
        if(!id){
            return res.status(400).json({ message:"Invalid Id"})
        }
        
        const order = await Order.delete(+id)
        res.json(order)
    }
}