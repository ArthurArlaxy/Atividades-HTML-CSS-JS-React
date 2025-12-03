import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { CreateCampaignRequestSchema, UpdateCampaignRequestSchema } from "../schemas/CampaignsRequestSchema.js";
import { HttpError } from "../errors/HttpError.js";
import { CampaignsRepository } from "../respositories/CampaignsRepository.js";

export class CampaignsController{
    constructor(private readonly campaignsRepository: CampaignsRepository){}

    index: Handler = async (req, res, next) => {
        try {
            
            const campaigns = await this.campaignsRepository.find()
            if (campaigns.length === 0 ) return res.status(200).json({ message: "No campaigns found. Create a new one!" })
            res.json(campaigns || { message: "Create a new Campaing"})

        } catch (error) {
            next(error)
        }
    }
    create: Handler = async (req, res, next) => {
        try {

            const body = CreateCampaignRequestSchema.parse(req.body)
            const newCampaign = await this.campaignsRepository.create(body)

            res.status(201).json(newCampaign)

        } catch (error) {
            next(error)
        }
    }
    show: Handler = async (req, res, next) => {
        try {
            
            const id = Number(req.params.id)

            const campaign = await this.campaignsRepository.findById(id)
            if(!campaign) throw new HttpError(404, "Campaign not found")

            res.json(campaign)

        } catch (error) {
            next(error)
        }
    }
    update: Handler = async (req, res, next) => {
        try {

            const id = Number(req.params.id)
            
            const campaignExists = await prisma.campaign.findUnique({ where: { id } })
            if(!campaignExists) throw new HttpError(404, "Campaign not found")

            const body = UpdateCampaignRequestSchema.parse(req.body)
            const updatedCampaign = await prisma.campaign.update({
                where: { id },
                data:body
            })

            res.json(updatedCampaign)
            
        } catch (error) {
            next(error)
        }
    }
    delete: Handler = async (req, res, next) => {
        try {
            
            const id = Number(req.params.id)
            
            const campaignExists = await prisma.campaign.findUnique({ where: { id } })
            if(!campaignExists) throw new HttpError(404, "Campaign not found")

            const deletedCampaign = await prisma.campaign.delete({ where: { id }})

            res.json(deletedCampaign)
        } catch (error) {
            next(error)
        }
    }
}