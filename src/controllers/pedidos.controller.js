import { Pedido } from '../models/pedidos.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getPedidos(req,res) {
    try {
        const pedidos = await Pedido.findAll({
            attributes: ['id','fecha','total'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(pedidos);    
    } catch (error) {
        logger.error('Error getPedidos: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createPedido (req, res) {
    try {
        const { fecha, total, clienteId} = req.body;
        const pedidos = await Pedido.create({ fecha, total, clienteId});
        res.json(pedidos);
    } catch (error) {
        logger.error('Error pedidos: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getPedidos,
    createPedido  
}