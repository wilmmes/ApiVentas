import { Router } from "express";
import categoriaController from "../controllers/categorias.controller.js";

const router =Router();
router.route('/').get(categoriaController.getCategorias)
.post(categoriaController.createCategoria)


export default router;