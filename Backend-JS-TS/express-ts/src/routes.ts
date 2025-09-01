import { Router } from "express";
import { TaskController } from "./controller/TaskController";

export const router = Router()
const taskController = new TaskController()

router.get('/tasks', taskController.index)
router.post('/tasks', taskController.store)
router.get('/tasks/:id', taskController.show)
router.put('/tasks/:id', taskController.update)
router.delete('/tasks/:id', taskController.delete)