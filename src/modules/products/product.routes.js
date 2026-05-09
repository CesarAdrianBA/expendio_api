const express = require('express');
const router = express.Router();

const controller = require('./product.controller');
const { createProductValidator, updateProductValidator } = require('./product.validators');
const validate = require('../../middlewares/validate');

router.post('/', createProductValidator, validate, controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', updateProductValidator, validate, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
