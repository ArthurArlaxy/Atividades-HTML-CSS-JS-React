import { Router } from "express";
import { productsController } from "./controllers/productsControllers";

export const router = Router()

router.get("/product", productsController.products)
router.post("/product", productsController.create)
router.get("/product/:id", productsController.product)
router.put("/product/:id", productsController.update)
router.delete("/product/:id", productsController.delete)
