import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";

export const router = Router()

router.get("/", async (req, res, next) => {
    res.json({message: "ok"})
})