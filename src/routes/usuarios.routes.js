import { Router } from "express";
import usuariosController from "../controllers/usuarios.controller.js";
import { authenticateToken } from '../middlewares/authenticate.middleware.js';

const router =Router();
router.route('/').get(authenticateToken,usuariosController.getUsuarios)
.post(usuariosController.createUsuario)


export default router;