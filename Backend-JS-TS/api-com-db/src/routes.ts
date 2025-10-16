import { Router } from "express";
import { productsController } from "./controllers/productsControllers";
import { CustomersControllers } from "./controllers/customersControllers";

export const router = Router()

router.get("/product", productsController.products)
router.post("/product", productsController.create)
router.get("/product/:id", productsController.product)
router.put("/product/:id", productsController.update)
router.delete("/product/:id", productsController.delete)

router.get("/customers",CustomersControllers.customers)
router.get("/customers/:id",CustomersControllers.customer)
router.post("/customers", CustomersControllers.create)
router.delete("/customers/:id", CustomersControllers.delete)