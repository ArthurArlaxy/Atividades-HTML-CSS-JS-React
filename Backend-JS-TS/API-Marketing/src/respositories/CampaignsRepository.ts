import { Campaign } from "@prisma/client";

export interface CreateCampaignAttribute{
    name: string
    description: string
    startDate: Date
    endDate?: Date
}

export interface CampaignsRepository{
    find: () => Promise<Campaign[]>
    findById: (id:number) => Promise<Campaign | null>
    create: (attributes: CreateCampaignAttribute) => Promise<Campaign>
    update: (id:number, attributes: Partial<CreateCampaignAttribute>) => Promise<Campaign | null>
    delete: (id:number) => Promise<Campaign | null>
}