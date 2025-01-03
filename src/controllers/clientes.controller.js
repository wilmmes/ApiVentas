import { Cliente } from '../models/clientes.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getClientes(req,res) {
    try {
        const clientes = await Cliente.findAll({
            attributes: ['id','nombre','apellido','email','telefono','direccion'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(clientes);    
    } catch (error) {
        logger.error('Error getUclientes: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createCliente (req, res) {
    try {
        const { nombre, apellido, email,telefono,direccion} = req.body;
        const clientes = await Cliente.create({ nombre, apellido, email,telefono,direccion});
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