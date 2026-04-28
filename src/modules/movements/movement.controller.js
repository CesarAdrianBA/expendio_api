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
}