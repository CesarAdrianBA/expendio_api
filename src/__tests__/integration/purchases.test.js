const request = require('supertest');
const app = require('../../app');
const { DESCRIBE } = require('sequelize/lib/query-types');

describe('POST /api/v1/purchases', () => {
  it('responds with purchase confirmation', async () => {
    const purchaseData = {
        id_proveedor: '1',
        productos: [
          { id_producto: '1', cantidad: 10, costo_unitario: 5.0 },
          { id_producto: '2', cantidad: 5, costo_unitario: 10.0 }
        ]
    };
    const response = await request(app)      
    .post('/api/v1/purchase')
    .send(purchaseData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Compra creada exitosamente');
  });
});

describe('GET /api/v1/purchases', () => {
  it('responds with a list of purchases', async () => {
    const response = await request(app).get('/api/v1/purchase/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});

describe('GET /api/v1/purchases/:id', () => {
  it('responds with a single purchase', async () => {
    const response = await request(app).get('/api/v1/purchase/1');
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('id_compra', 1);
  });

});

describe('patch /api/v1/purchases/:id/cancel', () => {
  it('responds with a cancellation confirmation', async () => {
    const response = await request(app).patch('/api/v1/purchase/1/cancel');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Compra cancelada exitosamente');
  });
});
