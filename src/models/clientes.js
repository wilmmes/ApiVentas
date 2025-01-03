import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';
import logger from "../logs/logger.js";
import { encriptar } from "../common/bycript.js";


export const Cliente = sequelize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate : {
            notNull: {
                msg:'Username cannot be null',
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

    Cliente.beforeCreate(async (user) => {
    try {
        user.password = await encriptar(user.password);
    } catch (error) {
        logger.error(error.message);        
        throw new Error ('Error al comparar') 
    }
})

Cliente.beforeUpdate(async (user) => {
    try {
        user.password = await encriptar(user.password);
    } catch (error) {
        logger.error(error.message);        
        throw new Error ('Error al comparar') 
    }
})
