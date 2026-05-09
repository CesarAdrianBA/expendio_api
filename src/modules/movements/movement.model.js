const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Movement = sequelize.define('Movimientos', {
    id_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo: {
        type:DataTypes.ENUM('entrada', 'salida','venta', 'ajuste'),
        allowNull: false
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    costo_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },

    precio_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },

    tipo_referencia: {
        type: DataTypes.STRING,
        allowNull: true
    },

    id_referencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    }


}, {
    tableName: 'movimientos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Movement;
