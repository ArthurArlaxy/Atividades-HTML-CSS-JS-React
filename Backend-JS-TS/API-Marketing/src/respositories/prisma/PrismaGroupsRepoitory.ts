import { Group } from "@prisma/client";
import { CreateGroupAttribute, GroupsRepository } from "../GroupsRepository.js";
import { prisma } from "../../database/index.js";

export class PrismaGroupsRepository implements GroupsRepository {
    async find(): Promise<Group[]> {
        return prisma.group.findMany()
    }
    async findById(id: number): Promise<Group | null> {
        return prisma.group.findUnique({
            where: { id },
            include:{
                leads:true
            }
        })
    }
    async create(attribute: CreateGroupAttribute): Promise<Group> {
        return prisma.group.create({ data: attribute })
    }
    async updateById(id: number, attribute: Partial<CreateGroupAttribute>): Promise<Group | null> {
        return prisma.group.update({
            where: { id },
            data: attribute
        })
    }
    async deleteById(id: number): Promise<Group | null> {
        return prisma.group.delete({ where: { id } })
    }

    async addLead(groupId: number, leadId: number): Promise<Group> {
        return prisma.group.update({
            where: { id: groupId },
            data: {
                leads: { connect: { id: leadId } }
            },
            include: { leads: true }
        })
    }
    async removeLead(groupId: number, leadId: number): Promise<Group> {
        return prisma.group.update({
            where: { id: groupId },
            data: {
                leads: { disconnect: { id:leadId } }
            },
            include: { leads: true }
        })
    }
}