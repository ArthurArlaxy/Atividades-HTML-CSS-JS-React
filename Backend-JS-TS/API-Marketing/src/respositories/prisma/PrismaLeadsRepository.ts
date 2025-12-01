import { Lead } from "@prisma/client";
import { CreateLeadAttributes, FindLeadsParams, LeadsRepository, LeadsWhereParams } from "../LeadsRepository.js";
import { prisma } from "../../database/index.js";

export class PrismaLeadsRepository implements LeadsRepository{
    async find(params: FindLeadsParams): Promise<Lead[]>{
        return prisma.lead.findMany({
            where:{
                name:{ 
                    contains: params.where?.name?.like,
                    equals: params.where?.name?.equals,
                    mode: params.where?.name?.mode
                },
                status: params.where?.status,
                
            }
        })
    }

    async findById(id: number): Promise<Lead | null>{

    }

    async count(where: LeadsWhereParams): Promise<number>{

    }

    async create(attributes: CreateLeadAttributes): Promise<Lead>{

    }

    async updateById(id: number, attributes: Partial<CreateLeadAttributes>): Promise<Lead | null>{

    }

    async deleteById(id: number): Promise<Lead | null>{

    }

}