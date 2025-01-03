import { Router } from "express";
import usuariosController from "../controllers/usuarios.controller.js";

const router =Router();
router.route('/').get(usuariosController.getUsuarios)
.post(usuariosController.createUsuario)


export default router;