import { Router } from "express";
import pedidosController from "../controllers/pedidos.controller.js";

const router =Router();
router.route('/').get(pedidosController.getPedidos)
.post(pedidosController.createPedido)

export default router;