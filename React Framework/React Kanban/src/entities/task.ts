export type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high"

export interface Task{
    id:Number,
    title:String,
    description:String,
    status: TaskStatus,
    priority:TaskPriority
}