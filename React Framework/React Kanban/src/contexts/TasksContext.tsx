import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Task } from "../entities/task";
import { tasksServices } from "../services/api";

export interface TasksContextData{
    tasks:Task[],
    createTask: (attributes: Omit<Task, "id">) => Promise<Task>,
    updateTask: (id:number, attribute: Partial<Omit<Task, "id">>) => Promise<void>,
    deleteTask: (id:number) => Promise<void>
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

    const updateTask = async (id:number, attributes: Partial<Omit<Task, "id">>) => {

    }

    const deleteTask =  async (id:number) => {
        
    }
    
    return (
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )
}
