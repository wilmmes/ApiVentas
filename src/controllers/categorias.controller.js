import { Categoria } from '../models/categoria.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getCategorias(req,res) {
    try {
        const categoria = await Categoria.findAll({
            attributes: ['id','nombre','descripcion','status'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(categoria);    
    } catch (error) {
        logger.error('Error categoria: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createCategoria (req, res) {
    try {
        const { nombre, descripcion } = req.body;
        const categoria = await Categoria.create({ nombre, descripcion });
        res.json(categoria);
    } catch (error) {
        logger.error('Error categoria: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getCategorias,
    createCategoria  
}