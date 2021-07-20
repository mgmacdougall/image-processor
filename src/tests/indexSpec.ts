import superTest from 'supertest';
import app from '../index';

const request = superTest(app);

describe('Index Route tests', () => {
  it('GET "/" should return "200" when called ', async () => {
    const result = await request.get('/');
    expect(result.statusCode).toEqual(200);
  });
  it('GET "/" should return the text "Hi"', async () => {
    const result = await request.get('/');
    expect(result.text).toBe('Hi');
  });
});
