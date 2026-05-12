const request = require('supertest');
const app = require('../app');

describe('GET /api/v1/health', () => {
  it('responds with API health status', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });
});
