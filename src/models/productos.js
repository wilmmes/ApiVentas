import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Status } from '../constants/index.js';
import {Categoria}from './categoria.js'


export const Producto   = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      talla: {
        type: DataTypes.STRING,
      },
      color: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
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
// Relación Producto - Categoría
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Categoria.hasMany(Producto, { foreignKey: 'categoriaId' });