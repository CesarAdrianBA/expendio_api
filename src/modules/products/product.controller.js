const ProductService = require('./product.service');
const { success, error } = require('../../utils/response');

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body);
            return success(res, product, 'Producto creado exitosamente', 201);        
        } catch (err) {
            return error(res, err.message, 400);
        }
    }

    async findAll(req, res) {
        try {
            const product = await ProductService.findAll();
            return success(res, product, 'Productos obtenidos', 200);
        } catch (err) {
            return error(res, err.message, 500);
        }
    }

    async findById(req, res) {
        try {
            const product = await ProductService.findById(req.params.id);

            if(!product) {
                return error(res, 'Producto no encontrado', 404);
            }

            return success(res, product, 'Producto encontrado', 200);

        } catch (err) {
            return error(res, err.message, 500);
        }
    }

    async update(req, res) {
        try {
            const product = await ProductService.update(req.params.id, req.body);

            if(!product) {
                return error(res, 'Producto no encontrado', 404);
            }

            return success(res, product, 'Producto actualizado', 200);

        } catch (err) {
            return error(res, err.message, 500)
        }
    }

    async delete(req, res) {
        try {
            const deleted = await ProductService.delete(req.params.id);


            if(!deleted) {
                return error(res, 'Producto no encontrado', 404)
            }

            return success(res, null, 'Producto eliminado', 200);

        } catch (err) {
            return error(res, err.message, 500);
        }
    }

}

module.exports = new ProductController();