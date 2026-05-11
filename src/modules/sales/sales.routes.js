const express = require('express');
const router = express.Router();
const controller = require('./sales.controller');
const { createSaleValidator } = require('./sales.validators');
const validate = require('../../middlewares/validate');

router.post('/', createSaleValidator, validate, controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.patch('/:id/cancel', controller.cancel);

module.exports = router;
