const PurchaseService = require('./purchases.service');
const {success, error} = require('../../utils/response');

class PurchaseController {

    async create(req, res) {
        try {
            const result = await PurchaseService.create(req.body);

            return success(res, result, 'Compra creada exitosamente');

        } catch (err) {
            return error(res, err.message);
        };
    }

    async cancel(req, res) {
        try {
            const { id } = req.params;
            const result = await PurchaseService.cancel(id);
            return success(res, result, 'Compra cancelada exitosamente');
        } catch (err) {
            return error(res, err.message);
        }
    }
    
    async findAll(req, res) {
        try {
            const data = await PurchaseService.getAll();

            res.json({
                success: true,
                data
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;

            const data = await PurchaseService.getById(id);

            res.json({
                success: true,
                data
            });

        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }


}

module.exports = new PurchaseController();