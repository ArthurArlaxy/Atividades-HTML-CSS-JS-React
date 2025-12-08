import { Lead } from "@prisma/client";
import { CreateLeadAttributes, FindLeadsParams, LeadsRepository, LeadsWhereParams } from "../LeadsRepository.js";
import { prisma } from "../../database/index.js";

export class PrismaLeadsRepository implements LeadsRepository {
    async find(params: FindLeadsParams): Promise<Lead[]> {
        return prisma.lead.findMany({
            where: {
                name: {
                    contains: params.where?.name?.like,
                    equals: params.where?.name?.equals,
                    mode: params.where?.name?.mode
                },
                status: params.where?.status,
            },
            orderBy: { [params.sortBy ?? "name"]: params.order },
            skip: params.offset,
            take: params.limit,
        })
    }

    async findById(id: number): Promise<Lead | null> {
        return prisma.lead.findUnique({
            where: { id },
            include: {
                groups: true,
                campaigns: true
            }
        })
    }

    async count(where: LeadsWhereParams): Promise<number> {
        let groups = undefined
        let campaigns = undefined
        if (where.groupId) {
            groups = {
                some: { id: where.groupId }
            }
        }

        if (where.campaignId || where.campaignStatus) {
            campaigns = {
                some: {
                    campaignId: where?.campaignId,
                    status: where?.campaignStatus
                }
            }
        }

        return prisma.lead.count({
            where: {
                name: {
                    contains: where?.name?.like,
                    mode: where?.name?.mode
                },
                status: where?.status,
                groups,
                campaigns
            }
        })
    }

    async create(attributes: CreateLeadAttributes): Promise<Lead> {
        return prisma.lead.create({ data: attributes })
    }

    async updateById(id: number, attributes: Partial<CreateLeadAttributes>): Promise<Lead | null> {
        const leadExists = await this.findById(id)

        if (!leadExists) return null

        return prisma.lead.update({
            where: { id },
            data: attributes
        })
    }

    async deleteById(id: number): Promise<Lead | null> {
        const leadExists = await this.findById(id)

        if (!leadExists) return null

        return prisma.lead.delete({ where: { id } })
    }
    async findGroupLeads(params: FindLeadsParams): Promise<Lead[]> {
        return prisma.lead.findMany({
            where: {
                name: {
                    contains: params.where?.name?.like,
                    mode: params.where?.name?.mode
                },
                status: params.where?.status,
                groups: {
                    some: { id: params.where?.groupId }
                }
            },
            orderBy: { [params.sortBy ?? "name"]: params.order },
            skip: params.offset,
            take: params.limit,
            include: {
                groups: params.include?.groups,
                campaigns: params.include?.campaigns
            }
        })
    }
    async findCampaignLeads(params: FindLeadsParams): Promise<Lead[]> {
        return prisma.lead.findMany({
            where: {
                name: {
                    contains: params.where?.name?.like,
                    mode: params.where?.name?.mode
                },
                campaigns: {
                    some: {
                        campaignId: params.where?.campaignId,
                        status: params.where?.campaignStatus
                    }
                }
            },
            orderBy: { [params.sortBy ?? "name"]: params.order },
            skip: params.offset,
            take: params.limit,
            include: {
                campaigns: true
            }
        })

    }
}
