const request = require('supertest');
const app = require('../../app');

describe('POST /api/v1/sale', () => {
  it('responds with sales confirmation', async () => {
    const salesData = {
      id_cliente: '1',
      productos: [
        { id_producto: '1', cantidad: 10, precio_unitario: 15.0 },
        { id_producto: '2', cantidad: 5, precio_unitario: 20.0 }
      ]
    };
    const response = await request(app)
      .post('/api/v1/sale')
      .send(salesData);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Venta registrada exitosamente');
  });
});

describe('GET /api/v1/sale', () => {
    it('responds with a list of sales', async () => {
        const response = await request(app).get('/api/v1/sale/');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });
});

describe('GET /api/v1/sale/:id', () => {
    it('responds with a single sale', async () => {
        const response = await request(app).get('/api/v1/sale/1');
        expect(response.status).toBe(200);
        expect(response.body.data).toHaveProperty('id_venta', 1);
    });
});

describe('patch /api/v1/sale/:id/cancel', () => {
    it('responds with a cancellation confirmation', async () => {
        const response = await request(app).patch('/api/v1/sale/2/cancel');
        expect(response.status).toBe(200);
        // expect(response.body).toHaveProperty('message', 'Venta cancelada exitosamente');
    });
});