const { body } = require('express-validator');

const createPurchaseValidator = [
    body('id_proveedor')
        .notEmpty()
        .withMessage('id_proveedor es obligatorio')
        .isInt({ min: 1 })
        .withMessage('id_proveedor debe ser un entero valido'),

    body('productos')
        .isArray({ min: 1 })
        .withMessage('productos debe contener al menos un producto'),

    body('productos.*.id_producto')
        .notEmpty()
        .withMessage('id_producto es obligatorio')
        .isInt({ min: 1 })
        .withMessage('id_producto debe ser un entero valido'),

    body('productos.*.cantidad')
        .notEmpty()
        .withMessage('cantidad es obligatorio')
        .isInt({ min: 1 })
        .withMessage('cantidad debe ser mayor a 0'),

    body('productos.*.costo_unitario')
        .notEmpty()
        .withMessage('costo_unitario es obligatorio')
        .isDecimal()
        .withMessage('costo_unitario debe ser decimal')
];

module.exports = {
    createPurchaseValidator
};
