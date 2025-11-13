import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, UpdateLeadRequestSchema } from "../schemas/LeadsRequestSchema.js";
import { HttpError } from "../errors/HttpError.js";
import { Prisma } from "@prisma/client";

export class LeadsControllers {

    static index: Handler = async (req, res, next) =>{
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = 1, pageSize = 10, name, status, sortBy = "name", order = "asc"} = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {}

            if(name) where.name = { contains:name, mode:"insensitive" }
            if(status) where.status = status

            const leads = await prisma.lead.findMany({
                where,
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                orderBy:{ [sortBy]: order }
            })

            const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page:pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            })

        } catch (error) {
            next(error)
        }
    }

    static create: Handler = async (req, res, next) => {
        try {
            
            const body = CreateLeadRequestSchema.parse(req.body)    
            const newLead = await prisma.lead.create({
                data:body
            })
            res.status(201).json(newLead)

        } catch (error) {
            next(error)
        }
    }

    static show: Handler = async (req, res, next) =>{
        try {

            const lead = await prisma.lead.findUnique({
                where:{id: Number(req.params.id)},
                include:{
                    campaigns:true,
                    groups: true
                }
            })

            if(!lead) throw new HttpError(404, "lead not found")

            res.json(lead)

            
        } catch (error) {
            next(error)
        }
    }

    static update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateLeadRequestSchema.parse(req.body)

            const leadExists = await prisma.lead.findUnique({where: { id }})
            if(!leadExists) throw new HttpError(404, "lead not found")
            const updatedLead = await prisma.lead.update({ where:{ id }, data:body })



            res.status(201).json(updatedLead)

        } catch (error) {
            next(error)
        }
    }

    static delete: Handler = async (req, res, next) =>{
        try {

            const deletedLead = await prisma.lead.delete({
                where:{id: Number(req.params.id)},
            })

            if(!deletedLead) throw new HttpError(404, "lead not found")

            res.status(201).json(deletedLead)
        } catch (error) {
            next(error)
        }
    }

}

