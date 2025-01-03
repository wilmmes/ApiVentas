import { Router } from "express";
import clientesController from "../controllers/clientes.controller.js";

const router =Router();
router.route('/').get(clientesController.getClientes)
.post(clientesController.createCliente)


export default router;