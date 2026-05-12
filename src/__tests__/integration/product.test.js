const request = require('supertest');
const app = require('../../app');

describe('POST /api/v1/product', () => {
  it('responds with product created', async () => {
    const productData = {
      nombre: 'Producto de prueba',
      id_categoria: 1,
      id_marca: 1,
      unidad: 1,
      unidades_por_paquete: 10,
      costo_unitario: 5.0,
      precio_sugerido: 10.0,
      precio_actual: 8.0,
      activo: true
    };

    const response = await request(app)
      .post('/api/v1/product')
      .send(productData)
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message', 'Producto creado exitosamente');
  });
});