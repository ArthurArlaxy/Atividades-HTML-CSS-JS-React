import { Router } from "express";
import { productsController } from "./controllers/productsControllers";

export const router = Router()

router.get("/product", productsController.products)
router.post("/product", productsController.products)
router.get("/product/:id", productsController.products)
router.put("/product/:id", productsController.products)
router.get("/product/:id", productsController.products)
