import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';

export const Cliente = sequelize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefono: {
        type: DataTypes.STRING,
      },
      direccion: {
        type: DataTypes.TEXT,
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