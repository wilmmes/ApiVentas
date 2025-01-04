import { Usuario } from '../models/usuarios.js';
import logger from '../logs/logger.js';
import { Status } from '../constants/index.js';

async function getUsuarios(req,res) {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id','nombreUsuario','password','rol'],
            order:[['id','DESC']],
            where: {
                status: Status.ACTIVE,
            }
        })
        res.json(usuarios);    
    } catch (error) {
        logger.error('Error getUsuarios: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }    
}

async function createUsuario (req, res) {
    try {
        const { nombreUsuario, password, rol } = req.body;
        const usuarios = await Usuario.create({ nombreUsuario, password, rol });
        res.json(usuarios);
    } catch (error) {
        logger.error('Error usuarios: ' + error.message);
        res.status(500).json({ message : 'Server error' });    
    }
}


export default {
    getUsuarios,
    createUsuario  
}