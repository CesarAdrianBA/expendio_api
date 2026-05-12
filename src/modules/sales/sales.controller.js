const SaleService = require('./sales.service');
const { success, error } = require('../../utils/response');

class SaleController {
  async create(req, res) {
    try {
      const result = await SaleService.create(req.body);
      return success(res, result, 'Venta registrada exitosamente', 201);
    } catch (err) {
      return error(res, err.message, 400);
    }
  }

  async cancel(req, res) {
    try {
      const { id } = req.params;
      const result = await SaleService.cancel(id);
      if (!result) {
        return error(res, 'Venta no encontrada o ya cancelada', 404);
      }
      return success(res, result, 'Venta cancelada exitosamente', 200);
    } catch (err) {
      return error(res, err.message, 400);
    }
  }

  async findAll(req, res) {
    try {
      const data = await SaleService.getAll();
      return success(res, data, 'Ventas obtenidas', 200);
    } catch (err) {
      return error(res, err.message, 500);
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const data = await SaleService.getById(id);
      if (!data) {
        return error(res, 'Venta no encontrada', 404);
      }
      return success(res, data, 'Venta encontrada', 200);
    } catch (err) {
      return error(res, err.message, 500);
    }
  }
}

module.exports = new SaleController();
