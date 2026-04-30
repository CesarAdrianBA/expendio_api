const Movement = require('./movement.model');

class MovementService {
    async create(data) {
        return await Movement.create(data);
    }

    async findAll() {
        return await Movement.findAll();
    }

    async findById(id) {
        return await Movement.findByPk();
    }

    async update(id, data) {
        const movement = await Movement.findByPk(id);

        if (!movement) return null;

        await movement.update(data);
        return movement;
    }

    async delete(id) {
        const movement = await Movement.findByPk(id);

        if (!movement) return null;

        await movement.destroy();
        return true;
    }
}

module.exports = new MovementService();