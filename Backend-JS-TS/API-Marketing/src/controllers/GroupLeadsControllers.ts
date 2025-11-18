import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { HttpError } from "../errors/HttpError.js";

export class GroupLeadsController {
    static getLeads: Handler = async (req, res, next) => {
        try {

            const group = await prisma.group.findUnique({
                where: { id: Number(req.params.groupId) },
            })

            if (!group) throw new HttpError(404, "group not found!")

            const leads = await prisma.group.findMany({
                where: { id: Number(req.params.groupId) },
                select: {
                    leads: true
                }
            })

            res.json(leads)

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

            const newLead = await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: {
                        connect: { id: Number(req.params.leadId) }
                    }
                }
            })

            res.json({ message: `lead atribuído ao grupo: ${group.name}`})

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

            const newLead = await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: {
                        disconnect: {
                            id: Number(req.params.leadId)
                        }
                    }
                }
            })

            res.json({ message: `lead removido do grupo: ${group.name}`})

        } catch (error) {
            next(error)
        }
    }
}