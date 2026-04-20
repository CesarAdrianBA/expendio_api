const Product = require('./product.model');

class ProductService {
    async create(data) {
        return await Product.create(data);
    }
    
    async findAll() {
        return await Product.findAll();
    }

    async findById(id) {
        return await Product.findByPk(id);
    }

    async update(id, data) {
        const product = await Product.findByPk(id);

        if(!product) return null;
    
        await product.update(data);
        return product;
    }

    async delete(id) {
        const product = await Product.findByPk(id);

        if(!product) return null;

        await product.destroy();
        return true;
    }

}

module.exports = new ProductService();