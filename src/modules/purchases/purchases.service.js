// services/PurchaseService.js
const Purchase = require('./purchases.model');
const PurchaseDetail = require('./purchasesDetail.model');
const { sequelize } = require('../../config/database');

class PurchaseService {

    async create(data) {
        const { id_proveedor, productos } = data;

        // iniciar transacción
        const transaction = await sequelize.transaction();

        try {
            // Crear compra
            const purchase = await Purchase.create({
                id_proveedor,
                total: 0,
                estado: 'ACTIVA'
            }, { transaction });

            let total = 0;

            // Preparar detalles
            const detalles = productos.map(item => {
                const subtotal = item.cantidad * item.costo_unitario;
                total += subtotal;

                return {
                    id_compra: purchase.id_compra,
                    id_producto: item.id_producto,
                    cantidad: item.cantidad,
                    costo_unitario: item.costo_unitario,
                    subtotal
                };
            });

            // Insertar detalles en lote
            await PurchaseDetail.bulkCreate(detalles, { transaction });

           

            //  Actualizar total
            await purchase.update({ total }, { transaction });

            //  confirmar
            await transaction.commit();

            return purchase;

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async cancel(id) {

        const transaction = await sequelize.transaction();

        try {
            const purchase = await Purchase.findByPk(id, { transaction });

            if (!purchase) {
                throw new Error("Compra no encontrada");
            }

            if (purchase.estado === 'CANCELADA') {
                throw new Error("La compra ya está cancelada");
            }

            // Esto dispara el trigger
            await purchase.update(
                { estado: 'CANCELADA' },
                { transaction }
            );

            await transaction.commit();

            return { message: "Compra cancelada correctamente" };

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }


    async getAll() {
        return await Purchase.findAll({
            order: [['fecha', 'DESC']]
        });
    }

    async getById(id) {
        const purchase = await Purchase.findByPk(id, {
            include: [
                {
                    model: require('./purchasesDetail.model')
                }
            ]
        });

        if (!purchase) {
            throw new Error("Compra no encontrada");
        }

        return purchase;
    }

}

module.exports = new PurchaseService();