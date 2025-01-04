import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';
import { Cliente } from "./clientes.js";

export const Pedido = sequelize.define('pedidos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
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

// Relación Pedido - Cliente
Pedido.belongsTo(Cliente, { foreignKey: 'clienteId' });
Cliente.hasMany(Pedido, { foreignKey: 'clienteId' });