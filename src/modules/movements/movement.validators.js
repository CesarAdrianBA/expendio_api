const { body } = require('express-validator');

const movementFieldsValidator = (options = {}) => {
    const required = options.required !== false;
    const field = (name, message) => {
        if (required) {
            return body(name).notEmpty().withMessage(message);
        }

        return body(name).optional({ nullable: true });
    };

    return [
        field('fecha', 'fecha es obligatorio')
            .isISO8601()
            .withMessage('fecha debe tener formato valido'),

        field('id_producto', 'id_producto es obligatorio')
            .isInt({ min: 1 })
            .withMessage('id_producto debe ser un entero valido'),

        field('tipo', 'tipo es obligatorio')
            .isIn(['entrada', 'salida', 'venta', 'ajuste'])
            .withMessage('tipo debe ser entrada, salida, venta o ajuste'),

        field('cantidad', 'cantidad es obligatorio')
            .isInt({ min: 1 })
            .withMessage('cantidad debe ser mayor a 0'),

        body('costo_unitario')
            .optional({ nullable: true })
            .isDecimal()
            .withMessage('costo_unitario debe ser decimal'),

        body('precio_unitario')
            .optional({ nullable: true })
            .isDecimal()
            .withMessage('precio_unitario debe ser decimal'),

        body('id_referencia')
            .optional({ nullable: true })
            .isInt({ min: 1 })
            .withMessage('id_referencia debe ser un entero valido')
    ];
};

const createMovementValidator = [
    ...movementFieldsValidator()
];

const updateMovementValidator = [
    ...movementFieldsValidator({ required: false })
];

module.exports = {
    createMovementValidator,
    updateMovementValidator
};
