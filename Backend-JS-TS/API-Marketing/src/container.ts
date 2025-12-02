import { LeadsController } from "./controllers/LeadsController.js";
import { GroupsController } from "./controllers/GroupsControllers.js";
import { CampaignsController } from "./controllers/CampaignController.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController.js";
import { GroupLeadsController } from "./controllers/GroupLeadsController.js";
import { PrismaLeadsRepository } from "./respositories/prisma/PrismaLeadsRepository.js";

const leadsRepository = new PrismaLeadsRepository()

export const leadsController = new LeadsController(leadsRepository)
export const groupsController = new GroupsController()
export const campaignsController = new CampaignsController()
export const campaignLeadsController = new CampaignLeadsController()
export const groupLeadsController = new GroupLeadsController()
