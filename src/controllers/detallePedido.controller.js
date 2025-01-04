import { DetallePedido } from '../models/detallePedido.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getDetallePedido(req,res) {
    try {
        const detallePedido = await DetallePedido.findAll({
            attributes: ['id','cantidad','precioUnitario','subtotal','pedidoId','productoId'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(detallePedido);    
    } catch (error) {
        logger.error('Error getDetallePedido: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createDetallePedido (req, res) {
    try {
        const { cantidad, precioUnitario, subtotal,pedidoId,productoId} = req.body;
        const detallePedido = await DetallePedido.create({ cantidad, precioUnitario, subtotal,pedidoId,productoId});
        res.json(detallePedido);
    } catch (error) {
        logger.error('Error detallePedido: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getDetallePedido,
    createDetallePedido  
}