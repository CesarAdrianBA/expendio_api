const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Product = sequelize.define('Product' , {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_marca: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    unidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    unidades_por_paquete: {
        type:DataTypes.TINYINT,
        allowNull:false
    },

    costo_unitario: {
        type:DataTypes.DECIMAL,
        allowNull: true
    },

    precio_sugerido: {
        type:DataTypes.DECIMAL,
        allowNull: true
    },

    precio_actual: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    activo: {
        type:DataTypes.BOOLEAN,
        allowNull:false
    }

}, {
    tableName: 'productos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Product;