const Sale = require('./sales.model');
const SaleDetail = require('./salesDetail.model');

Sale.hasMany(SaleDetail, {
  foreignKey: 'id_venta'
});

SaleDetail.belongsTo(Sale, {
  foreignKey: 'id_venta'
});
