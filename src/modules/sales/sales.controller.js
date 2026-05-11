const SaleService = require('./sales.service');
const { success, error } = require('../../utils/response');

class SaleController {
  async create(req, res) {
    try {
      const result = await SaleService.create(req.body);
      return success(res, result, 'Venta creada exitosamente');
    } catch (err) {
      return error(res, err.message);
    }
  }

  async cancel(req, res) {
    try {
      const { id } = req.params;
      const result = await SaleService.cancel(id);
      return success(res, result, 'Venta cancelada exitosamente');
    } catch (err) {
      return error(res, err.message);
    }
  }

  async findAll(req, res) {
    try {
      const data = await SaleService.getAll();
      return success(res, data);
    } catch (err) {
      return error(res, err.message, 500);
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const data = await SaleService.getById(id);
      return success(res, data);
    } catch (err) {
      return error(res, err.message, 404);
    }
  }
}

module.exports = new SaleController();
