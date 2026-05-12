const Sale = require('./sales.model');
const SaleDetail = require('./salesDetail.model');
const { sequelize } = require('../../config/database');

class SaleService {
  async create(data) {
    const { productos } = data;
    const transaction = await sequelize.transaction();

    try {
      const sale = await Sale.create({
        total: 0,
        estado: 'ACTIVA'
      }, { transaction });

      let total = 0;

      const detalles = productos.map((item) => {
        const subtotal = Number(item.cantidad) * Number(item.precio_unitario);
        total += subtotal;

        return {
          id_venta: sale.id_venta,
          id_producto: item.id_producto,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario,
          subtotal
        };
      });

      await SaleDetail.bulkCreate(detalles, { transaction });

      await sale.update({ total }, { transaction });
      await transaction.commit();

      return sale;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async cancel(id) {
    const transaction = await sequelize.transaction();

    try {
      const sale = await Sale.findByPk(id, { transaction });

      if (!sale) {
        throw new Error('Venta no encontrada');
      }

      if (sale.estado === 'CANCELADA') {
        throw new Error('La venta ya esta cancelada');
      }

      await sale.update(
        { estado: 'CANCELADA' }, 
        { transaction }
      );

      await transaction.commit();

      return { message: 'Venta cancelada correctamente' };
      
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getAll() {
    return await Sale.findAll({
      order: [['fecha', 'DESC']]
    });
  }

  async getById(id) {
    const sale = await Sale.findByPk(id, {
      include: [
        {
          model: SaleDetail
        }
      ]
    });

    if (!sale) {
      throw new Error('Venta no encontrada');
    }

    return sale;
  }
}

module.exports = new SaleService();
