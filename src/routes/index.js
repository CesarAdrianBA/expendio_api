const express = require('express');
const router = express.Router();

const productRoutes = require('../modules/products/product.routes');
const movementRoutes = require('../modules/movements/movement.routes');
const purchaseRoutes = require('../modules/purchases/purchases.routes');

router.use('/purchase', purchaseRoutes);

router.use('/movement', movementRoutes);

router.use('/product', productRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = router;