import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsControllers.js";
import { CampaignsController } from "./controllers/CampaignController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";
import { PrismaLeadsRepository } from "./respositories/prisma/PrismaLeadsRepository.js";
import { PrismaGroupsRepository } from "./respositories/prisma/PrismaGroupsRepoitory.js";
import { PrismaCampaignsRepository } from "./respositories/prisma/PrismaCampaignsRepository.js";

export const leadsRepository = new PrismaLeadsRepository()
export const groupsRepository = new PrismaGroupsRepository()
export const campaignsRepository = new PrismaCampaignsRepository()

export const leadsController = new LeadsController(leadsRepository)
export const groupsController = new GroupsController(groupsRepository)
export const groupLeadsController = new GroupLeadsController(groupsRepository, leadsRepository)
export const campaignsController = new CampaignsController(campaignsRepository)
export const campaignLeadsController = new CampaignLeadsController()
