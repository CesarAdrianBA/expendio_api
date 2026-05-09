const express = require('express');
const router = express.Router();
const controller = require('./movement.controller');
const { createMovementValidator, updateMovementValidator } = require('./movement.validators');
const validate = require('../../middlewares/validate');

router.post('/', createMovementValidator, validate, controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', updateMovementValidator, validate, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
