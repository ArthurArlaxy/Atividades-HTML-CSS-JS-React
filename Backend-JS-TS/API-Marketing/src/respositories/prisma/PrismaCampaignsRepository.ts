import { Campaign } from "@prisma/client";
import { prisma } from "../../database/index.js";
import { CampaignsRepository, CreateCampaignAttribute } from "../CampaignsRepository.js";

export class PrismaCampaignsRepository implements CampaignsRepository {
    find(): Promise<Campaign[]>{
        return prisma.campaign.findMany()
    }
    findById(id: number): Promise<Campaign | null>{
        return prisma.campaign.findUnique({
            where: { id },
            include: {
                leads: {
                    include: {
                        lead: true,
                    },
                },
            },
        });
    }
    create(attributes: CreateCampaignAttribute): Promise<Campaign>{
        return prisma.campaign.create({ data: attributes})
    }
    update(id:number, attributes: Partial<CreateCampaignAttribute>): Promise<Campaign | null>{
        return prisma.campaign.update({ 
            where: { id },
            data: attributes
        })
    }
    delete(id: number): Promise<Campaign | null>{
        return prisma.campaign.delete({ where: { id }})
    }

}
