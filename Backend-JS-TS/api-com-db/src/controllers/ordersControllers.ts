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
}