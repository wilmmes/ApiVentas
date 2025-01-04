import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';
import { Producto } from '../models/productos.js';

async function getProductos(req,res) {
    try {
        const productos = await Producto.findAll({
            attributes: ['id','nombre','descripcion','talla','color','precio','stock','imagen'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(productos);    
    } catch (error) {
        logger.error('Error getUclientes: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createProducto (req, res) {
    try {
        const { nombre, descripcion, talla,color,precio,stock,imagen,categoriaId} = req.body;
        const productos = await Producto.create({ nombre, descripcion, talla,color,precio,stock,imagen,categoriaId});
        res.json(productos);
    } catch (error) {
        logger.error('Error productos: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getProductos,
    createProducto  
}