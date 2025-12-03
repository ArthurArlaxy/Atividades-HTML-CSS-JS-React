import type { Handler } from "express";
import type { Prisma } from "@prisma/client";
import { AddLeadRequestScheme, GetCampaignLeadsRequestSchema, UpdateLeadStatusSchema } from "../schemas/CampaignsRequestSchema.js";
import { prisma } from "../database/index.js";
import { CampaignsRepository } from "../respositories/CampaignsRepository.js";
import { LeadsRepository, LeadsWhereParams } from "../respositories/LeadsRepository.js";

export class CampaignLeadsController {
    constructor(
        private readonly campaignsRepository: CampaignsRepository,
        private readonly leadsRepository: LeadsRepository
    ) { }


    getLeads: Handler = async (req, res, next) => {
        try {

            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: LeadsWhereParams = { campaignId }

            if (name) where.name = { like: name, mode: "insensitive" }
            if (status) where.campaignStatus = status

            const leads = await this.leadsRepository.findCampaignLeads({where,sortBy,order,limit,offset})

            const total = await this.leadsRepository.count(where)

            res.json({
                leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(Number(total) / limit)
                }
            })

        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const body = AddLeadRequestScheme.parse(req.body)
            const { campaignId, leadId } = req.params
            await this.campaignsRepository.addLead(Number(campaignId), Number(leadId), body.status)

            res.status(201).json({ message: "The lead was included to this campaign" })

        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const body = UpdateLeadStatusSchema.parse(req.body)
            const updateLeadCampaign = await this.campaignsRepository.updateLeadStatus(
                Number(req.params.campaignId),
                Number(req.params.leadId),
                body.status
            )

            res.json(updateLeadCampaign)

        } catch (error) {
            next(error)
        }
    }

    deleteLead: Handler = async (req, res, next) => {
        try {
            const deletedLead = await this.campaignsRepository.removeLead(
                Number(req.params.campaignId),
                Number(req.params.leadId)
            )

            res.json(deletedLead)

        } catch (error) {
            next(error)
        }
    }

}