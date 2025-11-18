import { Router } from "express";
import { LeadsControllers } from "./controllers/LeadsControllers.js";
import { GroupsController } from "./controllers/GroupsControllers.js";
import { CampaignsController } from "./controllers/CampaignControllers.js";
import { CampaignLeadsController } from "./controllers/CampaignLeadsControllers.js";
import { GroupLeadsController } from "./controllers/GroupLeadsControllers.js";

export const router = Router()

router.get("/leads", LeadsControllers.index)
router.post("/leads", LeadsControllers.create)
router.get("/leads/:id", LeadsControllers.show)
router.put("/leads/:id", LeadsControllers.update)
router.delete("/leads/:id", LeadsControllers.delete)

router.get("/groups", GroupsController.index)
router.post("/groups", GroupsController.create)
router.get("/groups/:id", GroupsController.show)
router.put("/groups/:id", GroupsController.update)
router.delete("/groups/:id", GroupsController.delete)

router.get("/campaigns", CampaignsController.index)
router.post("/campaigns", CampaignsController.create)
router.get("/campaigns/:id", CampaignsController.show)
router.put("/campaigns/:id", CampaignsController.update)
router.delete("/campaigns/:id", CampaignsController.delete)

router.get("/campaigns/:campaignId/leads", CampaignLeadsController.getLeads)
router.post("/campaigns/:campaignId/leads", CampaignLeadsController.addLead)
router.put("/campaigns/:campaignId/leads/:leadId", CampaignLeadsController.updateLeadStatus)
router.delete("/campaigns/:campaignId/leads/:leadId",CampaignLeadsController.deleteLead)

router.get("/groups/:groupId/leads", GroupLeadsController.getLeads)
router.post("/groups/:groupId/leads/:leadId", GroupLeadsController.addLead)
router.delete("/groups/:groupId/leads/:leadId", GroupLeadsController.deleteLead)