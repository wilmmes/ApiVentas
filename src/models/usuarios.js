import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';
import logger from "../logs/logger.js";
import { encriptar } from "../common/bycript.js";


export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreUsuario: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate : {
            notNull: {
                msg:'usuarios cannot be null',
            }
        },
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,       
        validate : {
            notNull: {
                msg:'Password cannot be null',
            }
        },
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'empleado',
      },
    status: {
        type: DataTypes.STRING,
        defaultValue:Status.ACTIVE,
        validate:{
            isIn:{
                args:[[Status.ACTIVE,Status.INACTIVE]],
                msg:'Status must be either active or inactive',
            }
        }
    }
});

//User.hasMany(Task);
//Task.belongsTo(User); 

/* User.hasMany(Task, {
    foreignKey: 'user_Id',
    sourceKey: 'id'
})

Task.belongsTo(User, {
    foreignKey:'user_Id',
    targetKey:'id'
}) */

Usuario.beforeCreate(async (user) => {
    try {
        user.password = await encriptar(user.password);
    } catch (error) {
        logger.error(error.message);        
        throw new Error ('Error al comparar') 
    }
})

Usuario.beforeUpdate(async (user) => {
    try {
        user.password = await encriptar(user.password);
    } catch (error) {
        logger.error(error.message);        
        throw new Error ('Error al comparar') 
    }
})
