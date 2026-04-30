const MovementService = require('./movement.service');
const {success, error} = require('../../utils/response');

class MovementController {
    async create(req, res) {
        try {
            const movement = await MovementService.create(req.body);
            return success(res, movement, 'Movimiento Creado');
        } catch (err) {
            return error(res, err.message);
        }
    }

    async findAll(req, res) {
        try {
            const movements = await MovementService.findAll();
            return success(res, movements);
        } catch (err) {
            return error(res, err.message);
        }
    }

    async findById(req, res) {
        try {
            const movement = await MovementService.findById(req.params.id);
            if(!movement) {
                return error(res, 'Movimiento no encontrado', 404);
            }
            return success(res, movement);
        } catch (err) {
            return error(res, err.message);
        }
    }

    async delete(req, res) {
        try {
            const deleted = await MovementService.delete(req.params.id);
            if(!deleted) {
                return error(res, 'Movimiento no encontrado', 404);
            }
            return success(res, null, 'Movimiento eliminado');
        } catch (err) {
            return error(res, err.message);
        }
    }

    async update(req, res) {
        try {
            const movement = await MovementService.update(req.params.id, req.body);
            if(!movement) {
                return error(res, 'Movimiento no encontrado', 404);
            }
            return success(res, movement, 'Movimiento actualizado');
        } catch (err) {
            return error(res, err.message);
        }
    }

}
module.exports = new MovementController();