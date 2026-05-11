const express = require('express');
const routes = require('./routes');
require('./modules/purchases/associations');
require('./modules/sales/associations');

const app = express();

app.use(express.json());
app.use('/api/v1', routes);


module.exports = app;
