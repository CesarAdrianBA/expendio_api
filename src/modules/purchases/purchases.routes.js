const express = require('express');
const router = express.Router();
const controller = require('./purchases.controller');
const { createPurchaseValidator } = require('./purchases.validators');
const validate = require('../../middlewares/validate');


router.post('/', createPurchaseValidator, validate, controller.create);
router.get('/', controller.findAll); 
router.get('/:id', controller.findById);
router.patch('/:id/cancel', controller.cancel);

module.exports = router;
