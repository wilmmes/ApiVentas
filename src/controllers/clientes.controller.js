import { Cliente } from '../models/clientes.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getClientes(req,res) {
    try {
        const clientes = await Cliente.findAll({
            attributes: ['id','username','password','status'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(clientes);    
    } catch (error) {
        logger.error('Error getUsers: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createCliente (req, res) {
    try {
        const { username, password } = req.body;
        const clientes = await Cliente.create({ username, password });
        res.json(clientes);
    } catch (error) {
        logger.error('Error clientes: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getClientes,
    createCliente  
}