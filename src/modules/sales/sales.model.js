const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Sale = sequelize.define('Ventas', {
  id_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'ACTIVA'
  }
}, {
  tableName: 'ventas',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Sale;
