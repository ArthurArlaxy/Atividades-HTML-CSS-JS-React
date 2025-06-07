import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/task";
import { tasksServices } from "../services/api";

export interface TasksContextData{
    tasks:Task[],
    createTask: (attributes: Omit<Task, "id">) => Promise<void>,
    updateTask: (id:string, attribute: Partial<Omit<Task, "id">>) => Promise<void>,
    deleteTask: (id:string) => Promise<void>
}

interface TasksContextProviderProps {
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextData)

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {
    const[tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        tasksServices.fetchTasks().then((storedTasks) => {
            setTasks(storedTasks)
        }) 
    }, [])

    const createTask = async (attributes:Omit<Task,"id">) => {
        const newTask = await tasksServices.createTask(attributes)
        setTasks((currentState) => [...currentState,newTask])
    }

    const updateTask = async (id:string, attributes: Partial<Omit<Task, "id">>) => {
        await tasksServices.updateTask(id,attributes)
        setTasks((currentState) => {
            const updatedTasks = [...currentState]
            const taskIndex = updatedTasks.findIndex((task) => task.id === id)
            Object.assign(updatedTasks[taskIndex], attributes)
            return updatedTasks
        })
    }

    const deleteTask =  async (id:string) => {
        await tasksServices.deleteTask(id)
        setTasks((currentState) => currentState.filter(task => task.id !== id))
    }
    
    return (
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )
}
