import { Router } from "express";
import { productsController } from "./controllers/productsControllers";
import { CustomersControllers } from "./controllers/customersControllers";
import { ordersControllers } from "./controllers/ordersControllers";

export const router = Router()

router.get("/product", productsController.products)
router.post("/product", productsController.create)
router.get("/product/:id", productsController.product)
router.put("/product/:id", productsController.update)
router.delete("/product/:id", productsController.delete)

router.get("/customers",CustomersControllers.customers)
router.get("/customers/:id",CustomersControllers.customer)
router.post("/customers", CustomersControllers.create)
router.put("/customers/:id", CustomersControllers.update)
router.delete("/customers/:id", CustomersControllers.delete)

router.get("/orders", ordersControllers.index)
router.post("/orders", ordersControllers.create)
router.get("/orders/:id", ordersControllers.order)
router.delete("/orders/:id", ordersControllers.delete)