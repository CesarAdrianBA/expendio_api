const { body } = require('express-validator');

const productFieldsValidator = (options = {}) => {
    const required = options.required !== false;
    const field = (name, message) => {
        if (required) {
            return body(name).notEmpty().withMessage(message);
        }

        return body(name).optional({ nullable: true });
    };

    return [
        field('nombre', 'nombre es obligatorio')
            .isString()
            .withMessage('nombre debe ser texto'),

        field('id_categoria', 'categoria es obligatorio')
            .isInt({ min: 1 })
            .withMessage('categoria debe ser un entero valido'),

        field('unidad', 'unidad es obligatorio')
            .isInt({ min: 1 })
            .withMessage('unidad debe ser un entero valido'),

        field('unidades_por_paquete', 'unidades_por_paquete es obligatorio')
            .isInt({ min: 1 })
            .withMessage('unidades_por_paquete debe ser mayor a 0'),

        body('costo_unitario')
            .optional({ nullable: true })
            .isDecimal()
            .withMessage('costo_unitario debe ser decimal'),

        body('precio_sugerido')
            .optional({ nullable: true })
            .isDecimal()
            .withMessage('precio_sugerido debe ser decimal'),

        field('precio_actual', 'precio_actual es obligatorio')
            .isDecimal()
            .withMessage('precio_actual debe ser decimal'),

        field('activo', 'activo es obligatorio')
            .isBoolean()
            .withMessage('activo debe ser booleano')
    ];
};

const createProductValidator = [
    ...productFieldsValidator()
];

const updateProductValidator = [
    ...productFieldsValidator({ required: false })
];

module.exports = {
    createProductValidator,
    updateProductValidator
};
