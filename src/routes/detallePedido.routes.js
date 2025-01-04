import { Router } from "express";
import detallePedidoController from "../controllers/detallePedido.controller.js";

const router =Router();
router.route('/').get(detallePedidoController.getDetallePedido)
.post(detallePedidoController.createDetallePedido)

export default router;