import { Campaign, LeadCampaign, LeadCampaignStatus } from "@prisma/client";
import { prisma } from "../../database/index.js";
import { CampaignsRepository, CreateCampaignAttribute } from "../CampaignsRepository.js";

export class PrismaCampaignsRepository implements CampaignsRepository {
    async find(): Promise<Campaign[]> {
        return prisma.campaign.findMany()
    }
    async findById(id: number): Promise<Campaign | null> {
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
    async create(attributes: CreateCampaignAttribute): Promise<Campaign> {
        return prisma.campaign.create({ data: attributes })
    }
    async update(id: number, attributes: Partial<CreateCampaignAttribute>): Promise<Campaign | null> {
        return prisma.campaign.update({
            where: { id },
            data: attributes
        })
    }
    async delete(id: number): Promise<Campaign | null> {
        return prisma.campaign.delete({ where: { id } })
    }
    async addLead(campaignId: number, leadId: number, status: LeadCampaignStatus): Promise<LeadCampaign | null> {
        return prisma.leadCampaign.create({
            data: {
                campaignId,
                leadId,
                status
            }
        })
    }
    async updateLeadStatus(campaignId: number, leadId: number, status: LeadCampaignStatus): Promise<LeadCampaign | null> {
        return prisma.leadCampaign.update({
            data: {status},
            where: {
                leadId_campaignId: {
                    campaignId,
                    leadId
                }
            }
        })
    }
    async removeLead(campaignId: number, leadId: number): Promise<LeadCampaign | null> {
        return prisma.leadCampaign.delete({
            where: {
                leadId_campaignId: {
                    campaignId,
                    leadId
                }
            }
        })
    }
}
