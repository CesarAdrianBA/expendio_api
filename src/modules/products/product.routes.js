const express = require('express');
const router = express.Router();

const controller = require('./product.controller');
const { createProductValidator } = require('./product.validators');
const validate = require('../../middlewares/validate');

router.post('/', createProductValidator, validate, controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;