import { Router } from "express";
import productosController from "../controllers/productos.controller.js";

const router =Router();
router.route('/').get(productosController.getProductos)
.post(productosController.createProducto)


export default router;