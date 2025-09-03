import { Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod"
import { HttpError } from "../error/HttpError";

const StoreRequesteSchema = z.object({
    // Código responsavel por realizar a verificação do corpo da requisição
    title: z.string(),
    description: z.string(),
    status: z.enum(['pending', 'in-progress', 'completed']),
    priority: z.enum(['low', 'medium', 'high'])
})

const UpdateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(['pending', 'in-progress', 'completed']).optional(),
    priority: z.enum(['low', 'medium', 'high']).optional()
})

export class TaskController{
    // Temos essa forma de tipar nossos controllers
    // GET /tasks
    index: Handler = (req, res) =>{
        const tasks = Task.findAll()
        return res.json(tasks)
    }

    // Temos também essa forma de tipar nossos controllers
    // POST /tasks
    store = (req: Request, res: Response) => {
        const parsedBody = StoreRequesteSchema.parse(req.body)
        const newTask = Task.create(parsedBody)
        res.status(201).json(newTask)
    }

    // GET /tasks/:id
    show: Handler = (req, res) => {
        const { id } =  req.params
        if (!id) throw new HttpError(400, "ID not mencioned")
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, "task no found")
        res.json(task)
    }

    update: Handler = (req, res) => {
        const { id } = req.params
        if (!id) throw new HttpError(400, "ID not mencioned")
        const parsedBody = UpdateRequestSchema.parse(req.body)
        const updatedTask = Task.update(+id, parsedBody)
        if (!updatedTask) throw new HttpError(404, "Task not found")
        res.json(updatedTask)
    }

    // DELETE /tasks/:id
    delete: Handler = (req, res) => {
        const { id } = req.params
        if (!id) throw new HttpError(400, "ID not found")
        const deletedTask = Task.delete(+id)
        if(!deletedTask) throw new HttpError(404, 'Task not found')
        res.json(deletedTask)
    }
}