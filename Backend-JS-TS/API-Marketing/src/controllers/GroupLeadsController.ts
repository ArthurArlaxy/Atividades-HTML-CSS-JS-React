import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { HttpError } from "../errors/HttpError.js";
import type { Prisma } from "@prisma/client";
import { GetLeadsRequestSchema } from "../schemas/LeadsRequestSchema.js";

export class GroupLeadsController {
    static getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = 1, pageSize = 10, name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {
                groups: {
                    some: { id: groupId }
                }
            }

            if (name) where.name = { contains: name, mode: "insensitive" }
            if (status) where.status = status


            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: {
                    groups: true
                }
            })

            const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPage: Math.ceil(Number(total) / pageSizeNumber)
                }
            })

        } catch (error) {
            next(error)
        }
    }

    static addLead: Handler = async (req, res, next) => {
        try {

            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.groupId) },
                include: {
                    leads: true
                }
            })

            if (!group) throw new HttpError(404, "group not found!")

            await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: {
                        connect: { id: Number(req.params.leadId) }
                    }
                }
            })

            res.json({ message: `lead atribuído ao grupo: ${group.name}` })

        } catch (error) {
            next(error)
        }
    }

    static deleteLead: Handler = async (req, res, next) => {
        try {

            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.groupId) },
                include: {
                    leads: true
                }
            })

            if (!group) throw new HttpError(404, "group not found!")

            await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: {
                        disconnect: {
                            id: Number(req.params.leadId)
                        }
                    }
                }
            })

            res.json({ message: `lead removido do grupo: ${group.name}` })

        } catch (error) {
            next(error)
        }
    }
}