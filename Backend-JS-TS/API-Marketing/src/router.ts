import { Router } from "express";
import { LeadsControllers } from "./controllers/LeadsControllers.js";

export const router = Router()

router.get("/leads", LeadsControllers.index)
router.post("/leads", LeadsControllers.create)
router.get("/leads/:id", LeadsControllers.show)
router.put("/leads/:id", LeadsControllers.update)
router.delete("/leads/:id", LeadsControllers.delete)