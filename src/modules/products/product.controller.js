const ProductService = require('./product.service');
const { success, error } = require('../../utils/response');

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body);
            return success(res, product, 'Producto creado');        
        } catch (err) {
            return error(res, err.message);
        }
    }

    async findAll(req, res) {
        try {
            const product = await ProductService.findAll();
            return success(res, product)
        } catch (err) {
            return error(res, err.message);
        }
    }

    async findById(req, res) {
        try {
            const product = await ProductService.findById(req.params.id);

            if(!product) {
                return error(res, 'Producto no encontrado', 404);
            }

            return success(res, product)

        } catch (err) {
            return error(res, err.message)
        }
    }

    async update(req, res) {
        try {
            const product = await ProductService.update(req.params.id, req.body);

            if(!product) {
                return error(res, 'Producto no encontrado', 404);
            }

            return success(res, product, 'Cliente actualizado');

        } catch (err) {
            return error(res, err.message)
        }
    }

    async delete(req, res) {
        try {
            const deleted = await ProductService.delete(req.params.id);


            if(!deleted) {
                return error(res, 'Producto no encontrado', 404)
            }

            return success(res, null, 'Producto eliminado');

        } catch (err) {
            return error(res, err.message);
        }
    }

}

module.exports = new ProductController();