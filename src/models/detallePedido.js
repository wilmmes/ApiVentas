import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';
import { Pedido } from "./pedidos.js";
import { Producto } from "./productos.js";

export const DetallePedido = sequelize.define('detallePedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precioUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      subtotal: {
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

// Relación DetallePedido - Pedido y Producto
DetallePedido.belongsTo(Pedido, { foreignKey: 'pedidoId' });
Pedido.hasMany(DetallePedido, { foreignKey: 'pedidoId' });
DetallePedido.belongsTo(Producto, { foreignKey: 'productoId' });
Producto.hasMany(DetallePedido, { foreignKey: 'productoId' });