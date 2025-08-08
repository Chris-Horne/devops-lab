const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('returns hello JSON', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from the backend!' });
  });
});
// This test checks that the /api/hello endpoint returns the expected JSON response.