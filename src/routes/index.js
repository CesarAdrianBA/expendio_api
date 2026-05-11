const express = require('express');
const router = express.Router();

const productRoutes = require('../modules/products/product.routes'); // Importa las rutas de productos
const movementRoutes = require('../modules/movements/movement.routes'); // Importa las rutas de movimientos | solo para pruebas, luego se eliminará esta línea y se moverá a su módulo correspondiente
const purchaseRoutes = require('../modules/purchases/purchases.routes'); // Importa las rutas de compras
const saleRoutes = require('../modules/sales/sales.routes');

router.use('/purchase', purchaseRoutes);

router.use('/sale', saleRoutes);

router.use('/movement', movementRoutes);

router.use('/product', productRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = router;
