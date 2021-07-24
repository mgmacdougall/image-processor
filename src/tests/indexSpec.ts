import superTest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';

const request = superTest(app);

describe('Index Route tests', () => {
  it('GET "/" should return "200" when called ', async () => {
    const result = await request.get('/');
    expect(result.statusCode).toEqual(200);
  });

  it('GET "/" with correct query params (w, h, name) should pass"', async () => {
    await request.get('/?w=100&h=200&name=fjord.jpg');
    const images: string = path.join(__dirname, '..', '..', 'images', 'cache');
    const files: string[] = fs.readdirSync(images);
    const result: boolean = files.includes('fjord_200_100.jpg');
    expect(result).toBe(true);
  });

  it('GET "/" with correct query params (w, h, name=test.jpg) should pass"', async () => {
    await request.get('/?w=100&h=200&name=fjord.jpg');
    const images: string = path.join(__dirname, '..', '..', 'images', 'cache');
    const files: string[] = fs.readdirSync(images);
    const result: boolean = files.includes('fjord_200_100.jpg');
    expect(result).toBe(true);
  });
});
