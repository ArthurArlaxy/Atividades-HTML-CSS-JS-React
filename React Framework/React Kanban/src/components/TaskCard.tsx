import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import type { Task, TaskPriority, TaskStatus } from "../entities/task"

interface TaskCardProp {
    task: Task
}

type CardColors ={ [key: string ]: "sky" | "amber" | "tomato"}
type ActionColors ={ [key: string ]: "indigo" | "green" | "purple"}

export const TaskCard: React.FC<TaskCardProp> = ({task}) => {
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

    return(
        <Card>
            <Flex align="center" gap="4">
                <Heading as="h3" size="3">{task.title}</Heading>
                <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
            </Flex>
            <Text as="p" my="4">{task.description}</Text>
            <Flex align="center" gap="2">
                { task.status !== "done" && <Button color={getActionColors(task.status)}>{getActionText(task.status)}</Button>}
                <Button color="red" >Excluir</Button>
            </Flex>
        </Card>
    )
}