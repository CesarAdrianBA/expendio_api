const express = require('express');
const router = express.Router();

const productRoutes = require('../modules/products/product.routes');

router.use('/product', productRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = router;