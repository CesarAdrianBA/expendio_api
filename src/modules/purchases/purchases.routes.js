const express = require('express');
const router = express.Router();
const controller = require('./purchases.controller');


router.post('/', controller.create);
router.get('/', controller.findAll); 
router.get('/:id', controller.findById);
router.patch('/:id/cancel', controller.cancel);

module.exports = router;