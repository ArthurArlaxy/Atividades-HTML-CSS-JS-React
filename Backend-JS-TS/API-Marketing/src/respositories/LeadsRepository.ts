import { Lead, LeadCampaignStatus } from "@prisma/client"

export type LeadStatus = "New" |"Contacted" |"Qualified" |"Converted" |"Unresponsive" |"Disqualified" |"Archived"

export interface LeadsWhereParams {
    name?: { 
        like?: string
        equals?: string
        mode?: "default" | "insensitive"
    }
    status?: LeadStatus
    groupId?: number
    campaignId?: number
    campaignStatus?: LeadCampaignStatus | undefined
}

export interface FindLeadsParams{
    where?: LeadsWhereParams
    sortBy?:"name" | "status" | "createdAt" | "updatedAt"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
    include?: {
        groups?: boolean,
        campaigns?: boolean
    }
}

export interface CreateLeadAttributes {
    name: string
    email: string
    phone: string
    status?: LeadStatus
}


export interface LeadsRepository {
    find: (params: FindLeadsParams) => Promise<Lead[]>
    findGroupLeads: (params: FindLeadsParams) => Promise<Lead[]>
    findCampaignLeads: (params: FindLeadsParams) => Promise<Lead[]>
    findById: (id: number) => Promise<Lead | null>
    count: (where: LeadsWhereParams) => Promise<number>
    create: (attributes: CreateLeadAttributes) => Promise<Lead>
    updateById:   (id:number, attributes: Partial<CreateLeadAttributes>) => Promise<Lead | null>
    deleteById: (id: number)  => Promise<Lead | null>
}