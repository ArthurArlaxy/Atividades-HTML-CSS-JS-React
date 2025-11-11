import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";

export const router = Router()

router.get("/", async (req, res, next) => {
    try {
        throw new HttpError(401,"Erro")
        res.json({message: "ok"})
    } catch (error) {
        next(error)
    }

})