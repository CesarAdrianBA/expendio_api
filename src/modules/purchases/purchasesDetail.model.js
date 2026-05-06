// models/purchaseDetail.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const PurchaseDetail = sequelize.define('DetalleCompras', {
  id_detalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_compra: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  costo_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'detalle_compras',
  timestamps: false
});

module.exports = PurchaseDetail;