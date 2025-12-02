import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { HttpError } from "../errors/HttpError.js";
import { GetLeadsRequestSchema } from "../schemas/LeadsRequestSchema.js";
import { GroupsRepository } from "../respositories/GroupsRepository.js";
import { LeadsRepository, LeadsWhereParams } from "../respositories/LeadsRepository.js";

export class GroupLeadsController {
    constructor(
        private readonly groupsRepository: GroupsRepository,
        private readonly leadsRepository: LeadsRepository
    ) { }

    getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = 1, pageSize = 10, name, status, sortBy = "name", order = "asc" } = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: LeadsWhereParams = { groupId }

            if (name) where.name = { like: name, mode: "insensitive" }
            if (status) where.status = status


            const leads = await this.leadsRepository.findGroupLeads({ where, limit, offset, order, sortBy, include: { groups:true} })

            const total = await this.leadsRepository.count(where)

            res.json({
                leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPage: Math.ceil(Number(total) / limit)
                }
            })

        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {

            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)
            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.groupId) }
            })

            if (!group) throw new HttpError(404, "group not found!")

            const updatedGroup = await this.groupsRepository.addLead(groupId, leadId)

            res.json(updatedGroup)

        } catch (error) {
            next(error)
        }
    }

    deleteLead: Handler = async (req, res, next) => {
        try {

            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)

            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.groupId) }
            })

            if (!group) throw new HttpError(404, "group not found!")

            const updatedGroup = await this.groupsRepository.removeLead(groupId, leadId)

            res.json(updatedGroup)

        } catch (error) {
            next(error)
        }
    }
}