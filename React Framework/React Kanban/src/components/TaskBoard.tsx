import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes"
import type { Task } from "../entities/task"
import { TaskCard } from "./TaskCard"
import { TasksContext } from "../contexts/TasksContext"
import { useContext } from "react"


export const TaskBoard: React.FC = () =>{
    const { tasks } = useContext(TasksContext)

    const tasksTodo: Task[] = tasks?.filter(task => task.status === "todo") ?? []
    const tasksProgress: Task[] = tasks?.filter(task => task.status === "doing") ?? []
    const tasksDone: Task[] = tasks?.filter(task => task.status === "done") ?? []


    return(
        <ScrollArea scrollbars="horizontal">
            <Grid columns="3" gap="4" minWidth="64rem">
                <Flex direction="column" gap="4">
                    <Badge size="3" color="gray"> Para Fazer ({tasksTodo.length})</Badge>
                    {tasksTodo.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
                <Flex direction="column" gap="4">
                    <Badge size="3" color="yellow"> Em Progresso ({tasksProgress.length})</Badge>
                    {tasksProgress.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
                <Flex direction="column" gap="4">
                    <Badge size="3" color="green"> Feito ({tasksDone.length})</Badge>
                    {tasksDone.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
            </Grid>
        </ScrollArea>
    )
}