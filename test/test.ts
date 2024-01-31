import supertest from 'supertest';
import { Express } from 'express'
import { app } from '../src/app';

describe('API Tests', () => {
  it('should return 200 for /supported/alpha endpoint', async () => {
    const response = await supertest((app as Express)).get('/supported/alpha');
    expect(response.status).toBe(200);
    // Additional assertions can be made on response.body, response.headers, etc.
  });

  // Add more tests for other endpoints as needed
});