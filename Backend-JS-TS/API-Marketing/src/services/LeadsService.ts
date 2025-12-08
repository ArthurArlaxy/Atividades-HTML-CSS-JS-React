import { HttpError } from "../errors/HttpError.js"
import { CreateLeadAttributes, LeadsRepository, LeadStatus, LeadsWhereParams } from "../respositories/LeadsRepository.js"

interface GetLeadsWithPaginationParams {
    page?: number
    pageSize?: number
    name?: string
    status?: LeadStatus
    sortBy?: "name" | "status" | "createdAt" | "updatedAt"
    order?: "asc" | "desc"
}

export class LeadsService {
    constructor(private readonly leadsRepository: LeadsRepository) {

    }
    async getAllLeadsPaginated(params: GetLeadsWithPaginationParams) {
        const { name, status, page = 1, pageSize = 10, sortBy = "name", order = "asc" } = params
        const limit = Number(pageSize)
        const offset = (Number(page) - 1) * limit

        const where: LeadsWhereParams = {}

        if (name) where.name = { like: name, mode: "insensitive" }
        if (status) where.status = status

        const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset })
        const total = await this.leadsRepository.count(where)

        return {
            leads,
            meta: {
                page: Number(page),
                pageSize: limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        }
    }
    async createLead(params: CreateLeadAttributes){
        if (!params.status) params.status = "New"
        const newLead = await this.leadsRepository.create(params)
        return newLead
    }
    async getLeadById(id:number){
            const lead = await this.leadsRepository.findById(id)
            if(!lead) throw new HttpError(404, "lead not found")
            return lead
    }
    async updateLead(leadId: number, params: Partial<CreateLeadAttributes>){
                    const lead = await this.leadsRepository.findById(leadId)
        
                    if(!lead) throw new HttpError(404, "lead not found")
        
                    if(lead.status === "New" && params.status !== "Contacted" && params.status){
                        throw new HttpError(400, "Um novo lead deve ser contado antes de ter seus status atualizados para outros valores")
                    }
        
                    const date = new Date()
                    const mouthWithoutIteraction = (date.getFullYear() - lead.updatedAt.getFullYear() ) * 12 + (date.getMonth() - lead.updatedAt.getMonth())
                    
                    if(params.status ==="Archived" && mouthWithoutIteraction < 6){
                        throw new HttpError(400, "Um lead precisa ter pelo menos 6 meses de inativleadIdade para ser desativado")
                    }
        
                    const updatedLead = await this.leadsRepository.updateById(leadId, params)

                    return updatedLead
    }
    async deleteLead(leadId:number){
            const leadExists = await this.leadsRepository.findById(leadId)
            if(!leadExists) throw new HttpError(404, "lead not found")
            const deletedLead = await this.leadsRepository.deleteById(leadId)
            
            return deletedLead
    }
}