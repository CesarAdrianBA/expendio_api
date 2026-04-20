const { body } = require('express-validator');

const createProductValidator = [
    body('nombre')
        .notEmpty()
        .withMessage('nombre es obligatorio'),

    body('id_categoria')
        .notEmpty()
        .withMessage('categoria es obligatorio'),

    body('unidad')
        .notEmpty()
        .withMessage('unidad es obligatorio'),

    // body('unidad_por_paquete')
    //     .notEmpty()
    //     .withMessage('unidad_por_paquete es obligatorio'),

    // body('costo_paquete')
    //     .notEmpty()
    //     .withMessage('costo_paquete es obligatorio'),

    body('precio_actual')
        .notEmpty()
        .withMessage('precio_actual es obligatorio'),

    // body('activo')
    //     .notEmpty()
    //     .withMessage('activo es obligatorio'),

]

module.exports = {
    createProductValidator
};