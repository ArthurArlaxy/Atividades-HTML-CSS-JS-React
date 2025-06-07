import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import type { Task, TaskPriority, TaskStatus } from "../entities/task"
import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContext"

interface TaskCardProp {
    task: Task
}

type CardColors ={ [key: string ]: "sky" | "amber" | "tomato"}
type ActionColors ={ [key: string ]: "indigo" | "green" | "purple"}

export const TaskCard: React.FC<TaskCardProp> = ({task}) => {

    const {deleteTask, updateTask} = useContext(TasksContext)

    const getActionText = (status:TaskStatus) =>{
        const actionTexts = {
            "todo": "Iniciar",
            "doing": "Concluir",
            "done": "Arquivar"
        }
        return actionTexts[status]
    }

    const getActionColors = (status:TaskStatus) => {
        const actionColors:ActionColors = {
            "todo": "indigo",
            "doing": "green",
            "done": "purple"
        }
        return actionColors[status]
    }

    const getPriorityColor = (priority:TaskPriority) =>{
        const prioriryColors:CardColors = {
            "low": "sky",
            "medium": "amber",
            "high": "tomato"
        }
        return prioriryColors[priority]
    }

    const handleDelete = (id:string) =>{
        const confirmation = confirm(`Tem certeza que deseja excluir essa tarefa?`)
        if (confirmation) deleteTask(id)
    }

    const handleUpdate = () => {
        if (task.status === "todo"){
            updateTask(task.id, {status: "doing"})
        } 
        else if(task.status === "doing"){
            updateTask(task.id, {status: "done"})
        }
    }

    return(
        <Card>
            <Flex align="center" gap="4">
                <Heading as="h3" size="3">{task.title}</Heading>
                <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
            </Flex>
            <Text as="p" my="4">{task.description}</Text>
            <Flex align="center" gap="2">
                { task.status !== "done" && <Button color={getActionColors(task.status)} onClick={handleUpdate}>{getActionText(task.status)}</Button>}
                <Button color="red" onClick={() => handleDelete(task.id)}>Excluir</Button>
            </Flex>
        </Card>
    )
}