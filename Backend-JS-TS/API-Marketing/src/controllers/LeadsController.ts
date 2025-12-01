import type { Handler } from "express";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, UpdateLeadRequestSchema } from "../schemas/LeadsRequestSchema.js";
import { HttpError } from "../errors/HttpError.js";
import { LeadsRepository, LeadsWhereParams } from "../respositories/LeadsRepository.js";

export class LeadsController {
    private leadsRepository: LeadsRepository

    constructor(leadsRepository: LeadsRepository){
        this.leadsRepository = leadsRepository
    }

    index: Handler = async (req, res, next) =>{
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = 1, pageSize = 10, name, status, sortBy = "name", order = "asc"} = query

            const limit = Number(page)
            const offset = (Number(page) - 1) * limit

            const where: LeadsWhereParams = {}

            if(name) where.name = { like:name, mode:"insensitive" }
            if(status) where.status = status

            const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset })
            const total = await this.leadsRepository.count(where)

            // const leads = await prisma.lead.findMany({
            //     where,
            //     skip: (pageNumber - 1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     orderBy:{ [sortBy]: order }
            // })

            // const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page:Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            })

        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            
            const body = CreateLeadRequestSchema.parse(req.body)    

            const newLead = await this.leadsRepository.create(body)

            // const newLead = await prisma.lead.create({
            //     data:body
            // })
            res.status(201).json(newLead)

        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) =>{
        try {

            const lead = await this.leadsRepository.findById(Number(req.params.id))

            // const lead = await prisma.lead.findUnique({
            //     where:{id: Number(req.params.id)},
            //     include:{
            //         campaigns:true,
            //         groups: true
            //     }
            // })

            if(!lead) throw new HttpError(404, "lead not found")

            res.json(lead)

            
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateLeadRequestSchema.parse(req.body)

            const lead = await this.leadsRepository.findById(id)

            // const lead = await prisma.lead.findUnique({where: { id }})

            if(!lead) throw new HttpError(404, "lead not found")

            if(lead.status === "New" && body.status !== "Contacted" && body.status){
                throw new HttpError(400, "Um novo lead deve ser contado antes de ter seus status atualizados para outros valores")
            }

            const date = new Date()
            const mouthWithoutIteraction = (date.getFullYear() - lead.updatedAt.getFullYear() ) * 12 + (date.getMonth() - lead.updatedAt.getMonth())
            
            if(body.status ==="Archived" && mouthWithoutIteraction < 6){
                throw new HttpError(400, "Um lead precisa ter pelo menos 6 meses de inatividade para ser desativado")
            }

            const updatedLead = await this.leadsRepository.updateById(id, body)
    
            // const updatedLead = await prisma.lead.update({ where:{ id }, data:body })

            res.status(201).json(updatedLead)

        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) =>{
        try {

            const id = Number(req.params.id)

            const leadExists = await this.leadsRepository.findById(id)

            if(!leadExists) throw new HttpError(404, "lead not found")

            const deletedLead = await this.leadsRepository.deleteById(id)

            // const deletedLead = await prisma.lead.delete({
            //     where:{id: Number(req.params.id)},
            // })

            if(!deletedLead) throw new HttpError(404, "lead not found")

            res.status(201).json(deletedLead)
        } catch (error) {
            next(error)
        }
    }

}

