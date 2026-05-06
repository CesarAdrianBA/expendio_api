// associations.js o donde configures relaciones

const Purchase = require('./purchases.model');
const PurchaseDetail = require('./purchasesDetail.model');

Purchase.hasMany(PurchaseDetail, {
  foreignKey: 'id_compra'
});

PurchaseDetail.belongsTo(Purchase, {
  foreignKey: 'id_compra'
});