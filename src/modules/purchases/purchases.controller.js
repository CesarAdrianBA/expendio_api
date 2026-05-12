const PurchaseService = require('./purchases.service');
const {success, error} = require('../../utils/response');

class PurchaseController {

    async create(req, res) {
        try {
            const result = await PurchaseService.create(req.body);

            return success(res, result, 'Compra creada exitosamente', 201);

        } catch (err) {
            return error(res, err.message);
        };
    }

    async cancel(req, res) {
        try {
            const { id } = req.params;
            const result = await PurchaseService.cancel(id);
            if (!result) {
                return error(res, 'Compra no encontrada o ya cancelada', 404);
            }
            return success(res, result, 'Compra cancelada exitosamente', 200);
        } catch (err) {
            return error(res, err.message, 400);
        }
    }
    
    async findAll(req, res) {
        try {
            const data = await PurchaseService.getAll();
            return success(res, data, 'Compras obtenidas exitosamente', 200);
        } catch (error) {
            return error(res, error.message, 500);
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;

            const data = await PurchaseService.getById(id);

            if (!data) {
                return error(res, 'Compra no encontrada', 404);
            }

            return success(res, data, 'Compra encontrada', 200);

        } catch (error) {
            return error(res, error.message, 500);
        }
    }


}


module.exports = new PurchaseController();