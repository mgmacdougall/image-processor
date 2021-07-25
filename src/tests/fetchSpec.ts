import superTest from 'supertest';
import app from '../index';

import { promises as fsPromises } from 'fs';
import path from 'path';

const request = superTest(app);

describe('File Fetch Spec ', async () => {
  it('GET "/?name=fetch_100_200.jpg" Should return the file name when requested from fs ', async () => {
    const testFile = path.join(__dirname, '..', '..', 'images', 'cache', 'fetch_100_200.jpg');
    await fsPromises.writeFile(testFile, '');
    const results = await request.get('/?w=200&h=100&name=fetch.jpg');
    expect(results.text).toEqual('fetch_100_200.jpg');
  });

  it('GET "/?name=fetch.jpg" Should "no file found" a text string if not found in cache', async () => {
    const results = await request.get('/?w=200&h=100&name=sdafsdf.jpg');
    expect(results.text).toEqual('no file found');
  });
});