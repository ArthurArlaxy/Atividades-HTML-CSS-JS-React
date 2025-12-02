import { Group } from "@prisma/client"

export interface CreateGroupAttribute{
    name: string,
    description: string
}


export interface GroupsRepository{
    find: () => Promise<Group[]>
    findById: (id:number) => Promise<Group | null>
    create: (attribute: CreateGroupAttribute) => Promise<Group>
    updateById: (id: number, attribute: Partial<CreateGroupAttribute>) => Promise<Group| null>
    deleteById: (id: number) => Promise<Group| null>
}