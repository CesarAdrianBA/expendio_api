const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Purchase = sequelize.define('Compras', {
  id_compra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'ACTIVA'
  }
}, {
    tableName: 'compras',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Purchase;