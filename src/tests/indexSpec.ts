import superTest from 'supertest';
import app from '../index';
import path from 'path';
import { promises as fsPromises } from 'fs';
import rimraf from 'rimraf';

const request = superTest(app);
afterEach(() => {
  const images: string = path.join(__dirname, '..', '..', 'images', 'cache/*');
  rimraf(images, (e) => console.log('Done'));
});

describe('Index Route tests', () => {
  it('POST "/" should return "200" when called ', async () => {
    const result = await request.post('/');
    expect(result.statusCode).toEqual(302);
  });

  it('POST "/" with correct query params (w, h, name) should pass"', async () => {
    await request.post('/?w=100&h=200&name=fjord.jpg');
    const images: string = path.join(__dirname, '..', '..', 'images', 'cache');
    const files: string[] = await fsPromises.readdir(images);
    const result: boolean = files.includes('fjord_200_100.jpg');
    expect(result).toBe(true);
  });

  it('POST "/" with incorrect query params for name "test.jpg" should pass"', async () => {
    await request.post('/?w=100&h=200&name=test.jpg');
    const images: string = path.join(__dirname, '..', '..', 'images', 'cache');
    const files: string[] = await fsPromises.readdir(images);
    const result: boolean = files.includes('fjord_200_100.jpg');
    expect(result).toBe(false);
  });

  it('POST "/" with incorrect query params extention only for name "." be caught successfully ', async () => {
    await request.post('/?w=100&h=200&name=.');
    const images: string = path.join(__dirname, '..', '..', 'images', 'cache');
    const files: string[] = await fsPromises.readdir(images);
    const result: boolean = files.includes('.');
    expect(result).toBe(false);
  });
});
